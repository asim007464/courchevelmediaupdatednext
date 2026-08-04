const { NavBar, Badge, Button } = window.CourchevelMediaDesignSystem_d33ac6;
const { SiteNav, NAV, GUIDES, Section, Grid, CtaBanner, SiteFooter } = window;

const FEATURED = {
  slot: 'guide-featured',
  category: 'How We Capture It',
  title: 'How we film a ski day without ever getting in the way',
  description: 'Positioning, lenses and timing on the mountain. The quiet method behind a full day of coverage, from first lift to the last light on the Saulire.',
  minutes: 9,
};

const CATEGORIES = ['All', 'Behind the Scenes', 'Planning Your Experience', 'How We Capture It', 'Experiences'];

function Hero() {
  return (
    <section className="hero" style={{ padding: 'var(--space-24) 0 var(--space-20)', maxWidth: 820 }}>
      <p className="eyebrow" style={{ marginBottom: 'var(--space-6)' }}>Guides</p>
      <h1 className="hero-h1" style={{ margin: 0, fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)' }}>
        What we have learned photographing Courchevel, <span className="gradient-text">written down.</span>
      </h1>
      <p style={{ margin: 'var(--space-6) 0 0', maxWidth: 620, fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', textWrap: 'pretty' }}>
        Notes on planning a holiday worth remembering, and on how we film it, from seasons spent working quietly on these mountains.
      </p>
    </section>
  );
}

function Featured({ guide }) {
  return (
    <Section>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
        <p className="eyebrow">Selected guide</p>
      </div>
      <a href="Guide Article.html" className="cardlink feature" data-screen-label="Featured guide">
        <div className="feature-thumb" style={{ minHeight: 460, position: 'relative' }}>
          <image-slot id={guide.slot} shape="rect" placeholder="Featured guide photograph"></image-slot>
        </div>
        <div className="feature-copy" style={{ padding: 'var(--space-12) var(--space-12) var(--space-12) var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <Badge tone="accent">{guide.category}</Badge>
          <h2 className="feature-title" style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)' }}>{guide.title}</h2>
          <p style={{ margin: 0, fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', textWrap: 'pretty' }}>{guide.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
            <span style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', color: 'var(--text-tertiary)' }}>{guide.minutes} MIN READ</span>
            <span style={{ width: 1, height: 12, background: 'var(--border-default)' }} />
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--blue-300)', display: 'flex', gap: 8, alignItems: 'center' }}>Read the guide <span className="arrow">&#8594;</span></span>
          </div>
        </div>
      </a>
    </Section>
  );
}

function Filters({ active, onChange, counts }) {
  return (
    <div className="filterbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-6)', marginBottom: 'var(--space-10)', flexWrap: 'wrap' }}>
      <div className="pillrow" style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        {CATEGORIES.map(c => (
          <button key={c} className="pill" aria-pressed={c === active} onClick={() => onChange(c)}>{c}</button>
        ))}
      </div>
      <span style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{counts} {counts === 1 ? 'Guide' : 'Guides'}</span>
    </div>
  );
}

function LoadMore({ shown, total, onMore }) {
  if (shown >= total) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-12)' }}>
      <Button variant="secondary" onClick={onMore} style={{ borderRadius: 'var(--radius-md)', letterSpacing: 'var(--tracking-wider)', fontSize: 'var(--text-sm)', padding: '14px 26px', fontWeight: 'var(--weight-medium)' }}>LOAD MORE</Button>
      <span style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-disabled)' }}>Showing {shown} of {total}</span>
    </div>
  );
}

function App() {
  const step = React.useMemo(() => (window.matchMedia('(max-width:720px)').matches ? 4 : 6), []);
  const [active, setActive] = React.useState('All');
  const [limit, setLimit] = React.useState(step);
  const filtered = active === 'All' ? GUIDES : GUIDES.filter(g => g.category === active);
  const shown = filtered.slice(0, limit);
  const pick = (c) => { setActive(c); setLimit(step); };
  return (
    <div className="shell">
      <div className="navwrap"><SiteNav active="Guides" /></div>
      <Hero />
      <Featured guide={FEATURED} />
      <Section>
        <Filters active={active} onChange={pick} counts={filtered.length} />
        <Grid guides={shown} />
        <LoadMore shown={shown.length} total={filtered.length} onMore={() => setLimit(l => l + step)} />
      </Section>
      <CtaBanner />
      <div style={{ paddingBottom: 'var(--space-16)' }}><SiteFooter /></div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('guides-root')).render(<App />);
