import Button from './Button.jsx';

export default function Hero() {
  return <section className="hero" id="home"><div><p className="eyebrow">Chef's Special · Karibu</p><h1>Coastal soul,<br /><em>served warm.</em></h1><p className="hero-copy">Fresh biryani, pilau, grilled fish, mishkaki and authentic coastal recipes served daily.</p><div className="hero-actions"><Button>Explore the menu</Button><a className="button button-outline" href="#reservation">Reserve a table</a></div></div><div className="hero-mark" aria-hidden="true"><span>EST.</span><strong>2014</strong><small>FROM THE COAST</small></div></section>;
}
