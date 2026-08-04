const { NavBar, Badge } = window.CourchevelMediaDesignSystem_d33ac6;
const { SiteNav, NAV, GUIDES, Section, Grid, CtaBanner, SiteFooter } = window;

const ARTICLE = {
  category: 'How We Capture It',
  title: 'Why overcast days often make better photographs',
  lead: 'Soft light, even snow and no harsh shadows. What flat light gives you that bluebird conditions often cannot.',
  minutes: 7,
};

const RELATED = [GUIDES[1], GUIDES[6], GUIDES[4]];

function ArticleHero({ article }) {
  return (
    <header>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="Guides.html">Guides</a>
        <span aria-hidden="true">/</span>
        <a href="Guides.html">{article.category}</a>
      </nav>
      <div className="art-head">
        <Badge tone="accent">{article.category}</Badge>
        <h1 className="art-title">{article.title}</h1>
        <p className="art-lead">{article.lead}</p>
        <div className="art-meta">
          <span>{article.minutes} MIN READ</span>
          <span style={{ width: 1, height: 12, background: 'var(--border-default)' }} />
          <span>COURCHEVEL, FRANCE</span>
        </div>
      </div>
      <div className="art-hero-img">
        <image-slot id="article-hero" shape="rect" placeholder="Featured photograph: skier in flat alpine light, wide cinematic crop"></image-slot>
      </div>
    </header>
  );
}

function Figure({ slot, alt, caption, className = 'figwide', frame = '' }) {
  return (
    <figure className={className} style={{ margin: undefined }}>
      <div className={'imgframe ' + frame}>
        <image-slot id={slot} shape="rect" placeholder={alt}></image-slot>
      </div>
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}

function Gallery({ slots, caption }) {
  return (
    <figure className="figwide">
      <div className="gallery2">
        {slots.map(([id, alt]) => (
          <div key={id} className="imgframe tall">
            <image-slot id={id} shape="rect" placeholder={alt}></image-slot>
          </div>
        ))}
      </div>
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}

function LinkBlock({ label, title, href = '#' }) {
  return (
    <a className="linkblock" href={href}>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span className="eyebrow">{label}</span>
        <span style={{ fontSize: 'var(--text-md)', color: 'var(--text-primary)', fontWeight: 'var(--weight-medium)' }}>{title}</span>
      </span>
      <span className="arrow" aria-hidden="true">&#8594;</span>
    </a>
  );
}

function ArticleBody() {
  return (
    <>
      <div className="prose">
        <p className="intro">Most families arrive hoping for a bluebird week. It is the picture everyone has in mind: deep blue sky, hard sun, long shadows on fresh snow. Yet some of the strongest photographs we deliver each season are made on the days nobody photographs on purpose, when the cloud sits low over the Saulire and the light goes flat.</p>
        <p>Flat light is not weak light. It is light that has been spread out, and that changes almost everything about how a ski day photographs. Faces stop squinting. Snow stops blowing out. The whole mountain becomes one large softbox, and we can keep working in any direction without waiting for the sun to move.</p>
        <h2>What flat light actually does</h2>
        <p>On a hard-sun day, the difference in brightness between sunlit snow and a face under a helmet is extreme. Something has to give: either the snow turns to white paper, or the face falls into shadow. Under cloud, that gap narrows to a point where both hold detail in the same frame.</p>
        <h3>Skin and goggles</h3>
        <p>Soft light wraps around a face instead of cutting across it. Goggle straps stop casting hard lines, and eyes stay open and relaxed. For children, this is often the difference between a natural expression and a grimace.</p>
        <h3>Snow texture</h3>
        <p>Counter-intuitively, gentle light reveals more of the surface. Wind lips, ski tracks and the shape of a groomed piste read as texture rather than as glare, which is exactly what we want behind a skier in motion.</p>
        <div className="pullquote">
          <p>The mountain becomes one large softbox. We stop waiting for the light and start following the day.</p>
        </div>
        <h2>What we change on a flat-light day</h2>
        <p>Conditions shape the plan rather than replacing it. We still follow your holiday as it happens, in the way we describe in <a href="#">how we capture ski holidays without interrupting them</a>, but the route and the shot list shift.</p>
        <ol>
          <li>We move higher earlier, where cloud often thins and the light turns luminous rather than grey.</li>
          <li>We favour slopes with definition: tree lines, pistes with visible shaping, ridges that give the frame a horizon.</li>
          <li>We work closer for portraits, since soft light rewards proximity and detail.</li>
          <li>We keep the film sequence tighter, cutting on movement instead of on sweeping landscape shots.</li>
        </ol>
        <div className="callout">
          <h4>Why overcast light works well</h4>
          <ul>
            <li>Softer shadows across faces and equipment</li>
            <li>More even exposure between snow and skin</li>
            <li>Better consistency while moving between runs</li>
            <li>More flexibility in filming direction, with no need to chase the sun</li>
          </ul>
        </div>
      </div>
      <Figure slot="article-wide-1" alt="Wide alpine photograph: skiers traversing a ridge under low cloud" caption="Cloud at 2,400m, Courchevel. Flat light keeps snow and faces in the same exposure." />
      <div className="prose">
        <h2>Where flat light is harder</h2>
        <p>It is not a universal advantage. Two situations need care, and both are about depth.</p>
        <ul>
          <li>Whiteout on open, featureless slopes, where snow and sky merge and a skier loses scale. We solve this by finding a reference in the frame: a pylon, a tree line, a second skier.</li>
          <li>Late afternoon in the village, where cloud shortens an already short day. We simply move indoors earlier, into chalet interiors and the first hour of <a href="#">après-ski</a>.</li>
        </ul>
        <p>Neither costs you the day. It changes the order of it, which is why we plan every booking around the forecast rather than against it.</p>
        <LinkBlock label="Related reading" title="A day following a family in Courchevel" href="Guide Article.html" />
      </div>
      <Gallery slots={[['article-gal-1', 'Portrait: child at the top of a lift in soft light'], ['article-gal-2', 'Detail: gloved hands adjusting a ski boot buckle']]} caption="Portrait and detail from the same hour. Neither frame needed direct sun." />
      <div className="prose">
        <h3>A note on film</h3>
        <p>For film, consistency matters more than drama. Cloud holds the exposure steady between runs, so a two-minute highlight film cuts together without the light jumping from shot to shot. On hard-sun days we often spend the edit balancing frames that were made twenty minutes apart.</p>
      </div>
      <Figure slot="article-inline-1" alt="Skier photographed from behind in soft light, cinematic crop" className="figinline" caption="Following, not directing. The quiet way we work in any conditions." />
      <div className="prose">
        <p>If your week looks grey on the forecast, it is rarely a reason to move your date. It is usually a reason to start earlier, go higher, and let us photograph the day you are actually having.</p>
      </div>
    </>
  );
}

function Related({ guides }) {
  return (
    <Section className="related" style={{ padding: 'var(--space-24) 0' }}>
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-6)', marginBottom: 'var(--space-10)' }}>
        <h2 style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)' }}>Continue exploring</h2>
      </div>
      <Grid guides={guides} />
    </Section>
  );
}

function ArticlePage() {
  return (
    <div className="shell" data-screen-label="Guide article">
      <div className="navwrap"><SiteNav active="Guides" /></div>
      <article>
        <ArticleHero article={ARTICLE} />
        <ArticleBody />
      </article>
      <Related guides={RELATED} />
      <CtaBanner />
      <div style={{ paddingBottom: 'var(--space-16)' }}><SiteFooter /></div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('article-root')).render(<ArticlePage />);
