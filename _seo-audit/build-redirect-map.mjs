// Wild Mountain Immigration — SEO revival redirect map.
// Maps every legacy URL to the new hub-and-spoke architecture.
// RedirectType: 301 (pass equity to a relevant survivor) | 410 (intentionally gone — no relevant target).
// Rule of thumb: never mass-301 to "/" (Google treats it as soft-404). Junk with no topical home = 410.
import fs from 'fs';

const raw = fs.readFileSync(new URL('./Pages.csv', import.meta.url), 'utf8');
// clicks lookup from GSC
const clickMap = new Map();
for (const l of raw.trim().split('\n').slice(1)) {
  const p = l.split(','); const clicks = +p.slice(-4)[0];
  const path = p.slice(0,-4).join(',').replace(/^https?:\/\/(www\.)?wildmountainimmigration\.com/, '');
  clickMap.set(path, clicks);
}
// Full URL universe from the live sitemap (all 292 published pages)
let universe;
try { universe = fs.readFileSync(new URL('./all-urls.txt', import.meta.url), 'utf8').trim().split('\n').filter(Boolean); }
catch { universe = [...clickMap.keys()].map(p => 'https://wildmountainimmigration.com'+p); }
const rows = universe.map(url => {
  const path = url.replace(/^https?:\/\/(www\.)?wildmountainimmigration\.com/, '');
  return { url, path, clicks: clickMap.get(path) || 0, impressions: 0, position: 0 };
});

// Priority countries that get a rebuilt /move-to-canada/from-X/ page (by intent + CTR)
const KEEP_COUNTRIES = new Set(['uk','ireland','australia','new-zealand','germany','france','netherlands','sweden','norway','denmark','belgium','switzerland','italy','spain','portugal','greece','poland','usa','mexico','japan']);
// Low-fit country pages → fold into the /move-to-canada/ hub (still relevant, just not a standalone build)
const FOLD_COUNTRIES = new Set(['taiwan','south-korea','hong-kong','chile','lithuania','croatia','slovakia','czech-republic','iceland','estonia']);

const KEEP_FAQ = new Set(['proof-of-work-experience','imm-5409','how-to-verify-immigration-consultant','can-you-immigrate-to-canada-if-you-are-over-50','what-is-the-lonely-canadian-rule','can-i-leave-canada-after-applying-for-spousal-sponsorship','sponsor-boyfriend-to-canada','understanding-lmia-cap','what-crimes-can-get-you-deported-from-canada','bank-statement-for-express-entry-proof-of-funds','benefits-of-marrying-a-canadian-citizen','how-long-does-spousal-sponsorship-take-in-canada-2024','proof-of-funds-express-entry','how-many-lmias-can-an-employer-get-in-canada','age-limit-for-canadian-immigration','are-immigration-consultants-worth-it','questions-to-ask-immigration-consultant-canada','why-are-immigration-consultants-so-expensive','who-can-apply-for-bridging-open-work-permit','how-long-is-medical-valid-for-canada-immigration','what-is-conjugal-relationship-explained','lmia-business-legitimacy','ghost-consultant','six-selection-factors','how-to-find-your-noc-code']);

const CITIES = ['calgary','vancouver','toronto','edmonton','canmore'];
// city pages with genuine RELOCATION intent → consolidate into the new /move-to-canada/{city}/ guide (Option B)
const CITY_RELOCATION = /(pros-and-cons|cost-of-living|moving-to|move-to|relocat|places-to-live|affordable|neighbourhoods|neighborhoods|is-.*-(good|nice)-place|is-.*-a-good|living-in|quality-of-life|best-cities|best-schools|schools-in)/;

function country(slug, prefix) {
  const m = slug.replace(prefix, '').match(/^([a-z-]+?)(-comprehensive|-comparison|-complete|-for-expats|-comparison-for-expats|$)/);
  return m ? m[1].replace(/-+$/, '') : '';
}

function classify(r) {
  const path = r.path, seg = path.split('/').filter(Boolean), top = seg[0] || '', slug = seg[seg.length-1] || '';

  if (path.includes('/wp-content/')) return ['DELETE','asset','—','noindex'];

  // ---- core ----
  const core = { '/':'/','/about/':'/about/','/contact/':'/contact/','/fees/':'/fees/','/consultation/':'/consultation/','/partners/':'/about/#team' };
  if (core[path]) return ['KEEP', 'core', core[path], '—'];
  if (path==='/privacy-policy/'||path==='/terms-of-use/') return ['KEEP','legal',path,'—'];
  if (path==='/how-to-move-to-canada/') return ['CONSOLIDATE','prospect-hub','/move-to-canada/','301'];
  if (path==='/canadian-city-guides/') return ['DELETE','city-hub','—','410'];

  // ---- local service (money) ----
  for (const c of CITIES) if (path.includes(`immigration-consultant-${c}`)) return ['KEEP','local-service',`/immigration-consultant-${c}/`,'—'];

  // ---- services ----
  if (top==='express-entry') {
    if (slug.includes('crs')) return ['KEEP','tool','/tools/crs-calculator/','—'];
    if (slug.includes('clb')) return ['KEEP','tool','/tools/clb-calculator/','—'];
    if (slug==='use-of-a-representative') return ['CONSOLIDATE','service','/immigrate/express-entry/','301'];
    return ['CONSOLIDATE','service','/immigrate/express-entry/','301'];
  }
  if (top==='labour-market-impact-assessment'||(top==='work'&&slug==='labour-market-impact-assessment')) {
    if (/low-wage|high-wage|permanent-resident|agricultural/.test(slug)) return ['KEEP','service',`/work/lmia/${slug.replace(/-lmia|lmia-/,'')}/`,'—'];
    return ['KEEP','service','/work/lmia/','—'];
  }
  if (top==='alberta-advantage-immigration-program') return ['KEEP','service',`/immigrate/aaip/${slug}/`,'—'];
  if (top==='immigrate') {
    const map={'alberta-advantage-immigration-program':'/immigrate/aaip/','british-columbia-provincial-nominee-program':'/immigrate/bc-pnp/','spousal-sponsorship-canada':'/immigrate/spousal-sponsorship/','canadian-citizenship':'/immigrate/canadian-citizenship/','express-entry':'/immigrate/express-entry/','permanent-residence':'/immigrate/'};
    return ['KEEP','service',map[slug]||`/immigrate/${slug}/`,'—'];
  }
  if (top==='work'||path==='/work-in-canada/') {
    if (path==='/work-in-canada/') return ['CONSOLIDATE','service','/work/','301'];
    return ['KEEP','service',`/work/${slug}/`,'—'];
  }
  if (top==='study') return ['KEEP','service','/study/','—'];
  if (path==='/canadian-super-visa/') return ['KEEP','service','/visit/super-visa/','—'];
  if (path==='/canadian-tourist-visa/'||path==='/visitor/') return ['KEEP','service','/visit/tourist-visa/','—'];

  // ---- relocation cluster (prospect engine) ----
  if (top==='move-from') {
    let c='';
    if (slug.startsWith('move-to-canada-from-')) c=country(slug,'move-to-canada-from-');
    else if (slug.startsWith('life-in-canada-vs-')) c=country(slug,'life-in-canada-vs-');
    if (c==='united-kingdom'||c==='uk') c='uk';
    if (c==='new'||c==='new-zealand') c='new-zealand';
    if (c==='south'||c==='south-korea') c='south-korea';
    if (c==='hong'||c==='hong-kong') c='hong-kong';
    if (c==='czech'||c==='czech-republic') c='czech-republic';
    if (KEEP_COUNTRIES.has(c)) return ['KEEP','country-page',`/move-to-canada/from-${c}/`,'—'];
    if (FOLD_COUNTRIES.has(c)) return ['CONSOLIDATE','country-fold','/move-to-canada/','301'];
    return ['CONSOLIDATE','country-fold','/move-to-canada/','301'];
  }

  // ---- FAQs ----
  if (top==='faqs') {
    if (KEEP_FAQ.has(slug)) return ['KEEP','faq',`/faqs/${slug}/`,'—'];
    return ['CONSOLIDATE','faq-thin','/faqs/','301'];
  }

  // ---- resources / guides ----
  if (top==='resources') return ['KEEP','guide',`/guides/${slug}/`,'—'];

  // ---- city lifestyle (the dilution) ----
  if (CITIES.includes(top)) {
    // pure utility → 410; relocation-support → 301 to that city's service page
    if (/(webcam|coffee|cafe|breakfast|restaurant|nightlife|bars|live-music|road-trip|skiing|hostel|realtor|real-estate|webcams|schools|social-groups|how-to-make-friends|free-things|fun-activities|safe|safer|expensive|salary|car|save-money)/.test(slug))
      return ['DELETE','city-utility','—','410'];
    if (CITY_RELOCATION.test(slug)) {
      const c = CITIES.find(x=>path.startsWith('/'+x+'/')) || 'calgary';
      return ['CONSOLIDATE','city-relocation',`/move-to-canada/${c}/`,'301']; // Option B: merge into the city relocation guide
    }
    return ['DELETE','city-misc','—','410'];
  }

  // ---- blog ----
  if (top==='blog') {
    const evergreen={'pgwp-extension-2024':'/work/post-graduation-work-permit/','super-visa-vs-visitor-visa':'/visit/super-visa/','how-long-can-canadian-permanent-residents-stay-abroad':'/faqs/','best-time-to-move-to-canada':'/move-to-canada/'};
    if (evergreen[slug]) return ['CONSOLIDATE','blog-evergreen',evergreen[slug],'301'];
    return ['DELETE','blog-news-trivia','—','410'];
  }

  // ---- WordPress / page-builder artifacts that should never be indexed ----
  if (['creative-persona','creative-software','portfolio-agency','popups','accordion-panels'].includes(top))
    return ['DELETE','wp-artifact','—','noindex'];
  // ---- legacy city-guides hub + services ----
  if (top==='city-guides'||path==='/canadian-city-guides/') return ['DELETE','city-hub','—','410'];
  if (top==='services') return ['CONSOLIDATE','services','/','301']; // fold into new hubs
  return ['CONSOLIDATE','review','/','301'];
}

const out=[['LegacyURL','Clicks','Position','Action','Category','NewURL_or_Target','RedirectType']];
const tally={}, clicksBy={}, redir={};
for (const r of rows.sort((a,b)=>b.clicks-a.clicks)) {
  const [action,cat,target,rt]=classify(r);
  tally[action]=(tally[action]||0)+1; clicksBy[action]=(clicksBy[action]||0)+r.clicks;
  if(rt!=='—') redir[rt]=(redir[rt]||0)+1;
  out.push([r.path,r.clicks,r.position,action,cat,target,rt]);
}
fs.writeFileSync(new URL('./redirect-map.csv',import.meta.url), out.map(r=>r.join(',')).join('\n'));
const total=rows.reduce((s,r)=>s+r.clicks,0);
console.log('redirect-map.csv written\n');
console.log('Action        Pages   Clicks   %');
for(const a of ['KEEP','CONSOLIDATE','DELETE']) console.log(`${a.padEnd(12)} ${String(tally[a]||0).padStart(5)}   ${String(clicksBy[a]||0).padStart(6)}   ${((clicksBy[a]||0)/total*100).toFixed(1)}%`);
console.log(`\nRedirects: 301=${redir['301']||0}  410=${redir['410']||0}  noindex=${redir['noindex']||0}`);
console.log(`Total: ${rows.length} pages, ${total} clicks`);
