/* Shared Courchevel Media chrome used by the Guides homepage and the article template. */
const { Badge, Button } = window.CourchevelMediaDesignSystem_d33ac6;

const NAV = ['What We Do', 'Portfolio', 'Reviews', 'Packages', 'Guides'];

const GUIDES = [
  { category: 'Planning Your Experience', title: 'When to book your photographer for the Courchevel season', description: 'How availability moves through December, February and Easter, and the weeks worth planning around.', minutes: 6 },
  { category: 'Behind the Scenes', title: 'A day following a family in Courchevel 1850', description: 'First lift, a long lunch at altitude, and the run home. How a full experience actually unfolds.', minutes: 10 },
  { category: 'How We Capture It', title: 'Why overcast days often make the better photographs', description: 'Soft light, even snow and no harsh shadow. What flat light gives you that bluebird cannot.', minutes: 7 },
  { category: 'Experiences', title: 'Sunrise on the slopes before the lifts open', description: 'Empty pistes, blue-hour light and the short window that makes it possible.', minutes: 5 },
  { category: 'Planning Your Experience', title: 'What to wear when your ski day is being filmed', description: 'Colour, layering and small choices that read well on camera without dressing for the camera.', minutes: 6 },
  { category: 'Behind the Scenes', title: 'Filming a surprise proposal at altitude', description: 'How we stay invisible until the moment happens, and what we agree in advance.', minutes: 8 },
  { category: 'How We Capture It', title: 'When we fly the drone, and when we do not', description: 'Conditions, airspace and discretion. The reasoning behind aerial coverage in the Trois Vallées.', minutes: 7 },
  { category: 'Experiences', title: 'Après-ski, photographed properly', description: 'Low light, warm interiors and long tables. Capturing the end of the day as it feels.', minutes: 5 },
  { category: 'Planning Your Experience', title: 'Half day or full day: choosing your coverage', description: 'What each covers on the mountain, and how families usually decide between them.', minutes: 6 },
];
GUIDES.forEach((g, i) => { g.slot = 'guide-' + (i + 1); });

/* Brand glyphs: Bootstrap Icons (MIT) for WhatsApp, TikTok, Facebook; Instagram from Lucide, per design-system icon guidance. */
const IconWhatsApp = () => (
  <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
);
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const IconTikTok = () => (
  <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/></svg>
);
const IconFacebook = () => (
  <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
);

const LANGS = [
  { code: 'EN', label: 'English', flag: null },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'PT', label: 'Português', flag: '🇧🇷' },
  { code: 'AR', label: 'العربية', flag: '🇦🇪' },
  { code: 'RU', label: 'Русский', flag: '🇷🇺' },
  { code: 'HE', label: 'עברית', flag: '🇮🇱' },
];

const IconGlobe = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

function LanguagePicker({ lang, setLang }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const away = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', away);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc); };
  }, [open]);
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button className="langbtn" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <IconGlobe />
        {lang}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease' }}><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {open && (
        <div className="langmenu" role="listbox" aria-label="Language">
          {LANGS.map(l => (
            <button key={l.code} role="option" aria-selected={l.code === lang} className="langitem" onClick={() => { setLang(l.code); setOpen(false); }}>
              <span className="langflag">{l.flag || <IconGlobe size={16} />}</span>
              <span style={{ flex: 1, textAlign: 'left' }}>{l.label}</span>
              {l.code === lang && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* Site header: the design system's NavBar shell with the live CONTACT US action. */
function SiteNav({ active = 'Guides' }) {
  const [menu, setMenu] = React.useState(false);
  const [lang, setLang] = React.useState(() => localStorage.getItem('cm-lang') || 'EN');
  const chooseLang = (code) => { setLang(code); try { localStorage.setItem('cm-lang', code); } catch (e) {} };
  React.useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') setMenu(false); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, []);
  const contact = (extra) => (
    <Button variant="primary" size="sm" icon={<IconWhatsApp />} style={{ borderRadius: 'var(--radius-md)', letterSpacing: 'var(--tracking-wide)', fontSize: 'var(--text-xs)', color: 'var(--white-0)', fontWeight: 'var(--weight-medium)', padding: '9px 14px', gap: 6, ...extra }}>CONTACT US</Button>
  );
  return (
    <div style={{ position: 'relative', zIndex: 30 }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)', padding: '16px 24px', background: 'var(--black-2)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
        <a href="Guides.html" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: 'var(--text-primary)' }}>
          <img src="assets/isologo.png" alt="" style={{ height: 32, width: 'auto' }} />
          <span style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-medium)', whiteSpace: 'nowrap' }}>Courchevel Media</span>
        </a>
        <div className="navlinks" style={{ display: 'flex', gap: 'var(--space-8)' }}>
          {NAV.map(l => (
            <a key={l} href={l === 'Guides' ? 'Guides.html' : '#'} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: l === active ? 'var(--text-primary)' : 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{l}</a>
          ))}
        </div>
        <div className="navactions" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <LanguagePicker lang={lang} setLang={chooseLang} />
          {contact()}
        </div>
        <div className="navmobile">
          <LanguagePicker lang={lang} setLang={chooseLang} />
          <button className="navburger" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(m => !m)}>
          {menu
            ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
            : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>}
          </button>
        </div>
      </nav>
      {menu && (
        <div className="navpanel">
          {NAV.map(l => (
            <a key={l} href={l === 'Guides' ? 'Guides.html' : '#'} className="navpanel-link" style={{ color: l === active ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{l}</a>
          ))}
          <div className="navpanel-foot">
            {contact({ flex: 1, padding: '14px 20px', fontSize: 'var(--text-sm)' })}
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ children, style, className }) {
  return <section className={className} style={{ padding: '0 0 var(--space-24)', ...style }}>{children}</section>;
}

function GuideCard({ guide }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: 'var(--surface-raised)', height: '100%' }}>
      <div className="slotwrap">
        <image-slot id={guide.slot} shape="rect" placeholder="Drop guide photograph"></image-slot>
      </div>
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <Badge tone="accent">{guide.category}</Badge>
        <h4 style={{ margin: 0, fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', lineHeight: 'var(--leading-snug)', color: 'var(--text-primary)' }}>{guide.title}</h4>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-normal)', textWrap: 'pretty' }}>{guide.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 'var(--space-4)' }}>
          <span style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', color: 'var(--text-tertiary)' }}>{guide.minutes} MIN READ</span>
          <span className="arrow">&#8594;</span>
        </div>
      </div>
    </div>
  );
}

function Grid({ guides }) {
  return (
    <div className="grid">
      {guides.map(g => (
        <a key={g.title} href="Guide Article.html" className="cardlink" data-screen-label={g.title}>
          <GuideCard guide={g} />
        </a>
      ))}
    </div>
  );
}

function CtaBanner() {
  return (
    <Section>
      <div className="cta-panel" style={{ maxWidth: 1080, margin: '0 auto', background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24) var(--space-16)', textAlign: 'center' }}>
        <h2 className="cta-h2" style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-bold)', margin: '0 0 16px' }}>Ready to <span className="gradient-text">secure your date?</span></h2>
        <p style={{ color: 'var(--text-secondary)', margin: '0 auto 40px', maxWidth: 720, lineHeight: 'var(--leading-relaxed)' }}>Availability is limited during the season. Send us a message today to reserve your filmmaker in Courchevel.</p>
        <div className="cta-actions" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
          <Button variant="secondary" icon={<IconInstagram />} style={{ borderRadius: 'var(--radius-md)', letterSpacing: 'var(--tracking-wider)', fontSize: 'var(--text-sm)', padding: '14px 26px', fontWeight: 'var(--weight-medium)' }}>INSTAGRAM</Button>
          <Button variant="primary" icon={<IconWhatsApp />} style={{ borderRadius: 'var(--radius-md)', letterSpacing: 'var(--tracking-wider)', fontSize: 'var(--text-sm)', padding: '14px 26px', color: 'var(--white-0)', fontWeight: 'var(--weight-medium)' }}>CONTACT US</Button>
        </div>
      </div>
    </Section>
  );
}

function SiteFooter() {
  const cols = [
    { h: 'Company', items: ['About', 'Behind the Lens', 'Contact'] },
    { h: 'Guides', items: ['All Guides', 'Behind the Scenes', 'How We Capture It'] },
    { h: 'Legal', items: ['Terms of Service', 'Privacy Policy', 'Service Agreement'] },
  ];
  const socials = [
    ['Instagram', 'https://www.instagram.com/courchevelmedia', <IconInstagram />],
    ['TikTok', 'https://www.tiktok.com/@courchevelmedia', <IconTikTok />],
    ['Facebook', 'https://www.facebook.com/people/Courchevel-Media/61554863364115/', <IconFacebook />],
  ];
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-16)' }}>
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.9fr .8fr .95fr .85fr', gap: 'var(--space-10)' }}>
        <div style={{ maxWidth: 340 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
            <img src="assets/isologo.png" alt="Courchevel Media" style={{ height: 52 }} />
            <span style={{ fontSize: 'var(--text-lg)', lineHeight: 1.15, color: 'var(--text-primary)', letterSpacing: 'var(--tracking-tight)' }}>Courchevel Media</span>
          </div>
          <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 'var(--leading-relaxed)' }}>Private photography and filmmaking for ski holidays and events in Courchevel.</p>
        </div>
        {cols.map(c => (
          <div key={c.h}>
            <h5 style={{ margin: '0 0 var(--space-5)', fontSize: 'var(--text-xs)', color: 'var(--text-disabled)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>{c.h}</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {c.items.map(i => <a key={i} href={c.h === 'Guides' ? 'Guides.html' : '#'} className="footlink" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>{i}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', marginTop: 'var(--space-16)', paddingTop: 'var(--space-6)' }}>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>&copy; 2026 Courchevel Media. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          {socials.map(([label, href, icon]) => (
            <a key={label} href={href} aria-label={label} className="socialbtn" target="_blank" rel="noreferrer">{icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteNav, NAV, GUIDES, Section, GuideCard, Grid, CtaBanner, SiteFooter, IconWhatsApp, IconInstagram, IconTikTok, IconFacebook });
