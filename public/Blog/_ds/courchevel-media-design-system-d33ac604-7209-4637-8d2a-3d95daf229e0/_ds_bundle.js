/* @ds-bundle: {"format":4,"namespace":"CourchevelMediaDesignSystem_d33ac6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ArticleCard","sourcePath":"components/marketing/ArticleCard.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f9c5c9065c2e","components/core/Button.jsx":"9ed667f421a7","components/core/Card.jsx":"4e96aac89464","components/marketing/ArticleCard.jsx":"952626fb5f80","components/marketing/PricingCard.jsx":"e3846032f160","components/marketing/ProcessStep.jsx":"1a0fd322a01f","components/navigation/Footer.jsx":"1d17605e2697","components/navigation/NavBar.jsx":"8142e59d25a9","ui_kits/marketing-website/app.jsx":"992c4ffc40e1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CourchevelMediaDesignSystem_d33ac6 = window.CourchevelMediaDesignSystem_d33ac6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'accent'
}) {
  const tones = {
    accent: {
      color: 'var(--blue-300)',
      background: 'transparent'
    },
    neutral: {
      color: 'var(--text-secondary)',
      background: 'var(--surface-pill)'
    }
  };
  const t = tones[tone] || tones.accent;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      padding: tone === 'neutral' ? '4px 12px' : '0',
      borderRadius: 'var(--radius-pill)',
      ...t
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--text-base)'
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--text-md)'
  }
};
const variants = {
  primary: {
    background: 'var(--green-500)',
    color: '#04220f',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)'
  },
  ghost: {
    background: 'var(--surface-pill)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)'
  },
  link: {
    background: 'transparent',
    color: 'var(--blue-300)',
    border: '1px solid transparent',
    padding: '0'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  onClick,
  style
}) {
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'filter var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...s,
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.12)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padded = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: padded ? 'var(--space-8)' : 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ArticleCard.jsx
try { (() => {
function ArticleCard({
  image,
  category,
  title,
  description,
  minutes
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: image ? `url(${image}) center/cover` : 'var(--surface-overlay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, category), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 'var(--leading-snug)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)'
    }
  }, minutes, " MIN READ"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-300)'
    }
  }, "\u2192"))));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
function PricingCard({
  title,
  price,
  description,
  features = [],
  ctaLabel = 'Book Now',
  highlighted = false,
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      border: `1px solid ${highlighted ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      minWidth: '280px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-tertiary)'
    }
  }, price)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '10px',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-300)'
    }
  }, "\u2022"), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    style: {
      marginTop: 'auto',
      width: '100%'
    },
    onClick: onCta
  }, ctaLabel));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
function ProcessStep({
  number,
  title,
  description,
  isLast = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 2px 1fr',
      gap: 'var(--space-8)',
      paddingBottom: isLast ? 0 : 'var(--space-8)',
      borderBottom: isLast ? 'none' : '1px solid var(--border-subtle)',
      marginBottom: isLast ? 0 : 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--gray-4)'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, description)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc
}) {
  const cols = [{
    h: 'Company',
    items: ['About', 'Behind the Lens', 'Work With Us', 'Contact']
  }, {
    h: 'Experience',
    items: ['The Process', "What's Included", 'Locations', 'FAQs']
  }, {
    h: 'Guides',
    items: ['All Guides', 'Behind the Scenes', 'Planning Your Experience', 'How We Capture It']
  }, {
    h: 'Legal',
    items: ['Terms & Conditions', 'Privacy Policy', 'Cookies']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-10)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: 'var(--space-4)'
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-primary)'
    }
  }, "Courchevel Media")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-tertiary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Private photography and filmmaking for ski holidays and events in Courchevel."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-disabled)',
      marginTop: 'var(--space-8)'
    }
  }, "\xA9 2026 Courchevel Media. All rights reserved.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      flexWrap: 'wrap'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: '0 0 12px',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, i)))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logoSrc,
  links = [],
  activeLink
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      background: 'var(--black-2)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      height: 28,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, "Courchevel Media")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--text-sm)',
      color: l === activeLink ? 'var(--text-primary)' : 'var(--text-secondary)',
      fontWeight: 'var(--weight-medium)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, "EN"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, "WHATSAPP")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  NavBar,
  Footer,
  PricingCard,
  ArticleCard,
  Button
} = window.CourchevelMediaDesignSystem_d33ac6;
const IMAGES = ['../../assets/imagery/portfolio-portfolio-grid.jpg', '../../assets/imagery/experience-mountain-bw.jpg', '../../assets/imagery/guides-hero-skier-video.jpg', '../../assets/imagery/pricing-page-ref.jpg'];
const ARTICLES = [{
  image: '../../assets/imagery/portfolio-portfolio-grid.jpg',
  category: 'Planning Your Experience',
  title: 'When Is the Best Time to Book Your Ski Photographer?',
  description: 'Key dates, availability tips and why early planning makes all the difference.',
  minutes: 6
}, {
  image: '../../assets/imagery/experience-mountain-bw.jpg',
  category: 'Behind the Scenes',
  title: 'A Day Following a Family in Courchevel 1850',
  description: 'See how a typical full-day experience unfolds from first lift to après-ski.',
  minutes: 10
}, {
  image: '../../assets/imagery/guides-hero-skier-video.jpg',
  category: 'How We Capture It',
  title: 'Why Cloudy Days Create the Best Photos',
  description: 'The science behind light, contrast and why overcast conditions work magic.',
  minutes: 7
}];
const TABS = ['Home', 'Portfolio', 'Process', 'Pricing', 'Guides'];
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      textAlign: 'center',
      padding: '96px 24px 64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-tight)',
      maxWidth: 900
    }
  }, "Your ski holiday, ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "captured like cinema.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-secondary)',
      maxWidth: 560,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Exclusive photo and video service capturing your Courchevel experience with discretion and cinematic detail."));
}
function PortfolioGrid({
  images
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-bold)',
      margin: '0 0 8px'
    }
  }, "Selected ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Work")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 32px',
      fontSize: 'var(--text-base)'
    }
  }, "A glimpse into the moments we've had the privilege to capture."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: '160px',
      gap: '12px'
    }
  }, images.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      gridColumn: i === 0 ? 'span 1' : i === 1 ? 'span 2' : 'span 1',
      gridRow: i === 0 || i === 1 ? 'span 2' : 'span 1',
      borderRadius: 'var(--radius-lg)',
      background: `url(${src}) center/cover`
    }
  })))));
}
function PricingSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-bold)',
      margin: '0 0 8px'
    }
  }, "Choose Your ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Experience")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 auto 40px',
      maxWidth: 560
    }
  }, "Whether you're looking to capture a single day or your entire holiday, each experience is tailored to your plans."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    title: "Half Experience",
    price: "From \u20AC1,000",
    description: "Four hours of photography and filmmaking, designed to capture the highlights of your day.",
    features: ['Up to four hours of coverage', 'Professionally curated photo gallery', 'Individual cinematic ski clips', 'Highlight film (up to one minute)']
  }), /*#__PURE__*/React.createElement(PricingCard, {
    title: "Full Experience",
    price: "From \u20AC1,500",
    description: "A complete day of photography and filmmaking, from your first runs to apr\xE8s-ski.",
    features: ['From first lift to après-ski', 'Professionally curated photo gallery', 'Highlight film (up to two minutes)', 'Drone footage, when conditions allow']
  }), /*#__PURE__*/React.createElement(PricingCard, {
    title: "Signature Experience",
    price: "From \u20AC15,000",
    description: "A private production team dedicated exclusively to documenting your holiday.",
    features: ['Dedicated photographer & filmmaker throughout your stay', 'From private jet arrival to your final evening', 'A bespoke cinematic film of your holiday'],
    ctaLabel: "By enquiry only"
  })));
}
function GuidesSection({
  articles
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-bold)',
      margin: '0 0 8px'
    }
  }, "Knowledge for your ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "experience.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 32px'
    }
  }, "Practical guides and expert insights from years photographing and filming in the Alps."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px'
    }
  }, articles.map((a, i) => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: i
  }, a))))));
}
function ProcessSection() {
  const steps = [['01', 'Planning', 'We adapt everything around your holiday, understanding your plans, preferences and priorities before we meet.'], ['02', 'Capturing', 'Enjoy your day while we work discreetly in the background, capturing the moments that matter most.'], ['03', 'Delivery', 'Your professionally edited photos and film are carefully selected and delivered within days.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-bold)',
      margin: '0 0 8px'
    }
  }, "Simple process, ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "unforgettable results.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 40px'
    }
  }, "We make it easy from the first message to the final delivery."), steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 2px 1fr',
      gap: '32px',
      paddingBottom: i === 2 ? 0 : 32,
      borderBottom: i === 2 ? 'none' : '1px solid var(--border-subtle)',
      marginBottom: i === 2 ? 0 : 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-3xl)',
      color: 'var(--gray-4)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, d))))));
}
function CtaBanner() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '64px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-bold)',
      margin: '0 0 16px'
    }
  }, "Ready to ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "secure your date?")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 auto 32px',
      maxWidth: 480
    }
  }, "Availability is limited during the season. Send us a message today to reserve your filmmaker in Courchevel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "INSTAGRAM"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "CONTACT US"))));
}
function App() {
  const [tab, setTab] = React.useState('Home');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo-mark-white.png",
    links: TABS,
    activeLink: tab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      margin: '20px 0'
    }
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: `1px solid ${tab === t ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
      background: tab === t ? 'var(--surface-overlay)' : 'transparent',
      color: tab === t ? 'var(--text-primary)' : 'var(--text-tertiary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)'
    }
  }, t))), tab === 'Home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(PortfolioGrid, {
    images: IMAGES
  }), /*#__PURE__*/React.createElement(PricingSection, null), /*#__PURE__*/React.createElement(CtaBanner, null)), tab === 'Portfolio' && /*#__PURE__*/React.createElement(PortfolioGrid, {
    images: [...IMAGES, ...IMAGES]
  }), tab === 'Process' && /*#__PURE__*/React.createElement(ProcessSection, null), tab === 'Pricing' && /*#__PURE__*/React.createElement(PricingSection, null), tab === 'Guides' && /*#__PURE__*/React.createElement(GuidesSection, {
    articles: ARTICLES
  }), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo-mark-white.png"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
