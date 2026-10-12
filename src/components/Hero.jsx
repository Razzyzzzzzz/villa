import { images } from "../data/images";
import { highlights } from "../data/resort";

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${images["pool-panorama"]})` }}>
      <div className="container hero__content">
        <span className="eyebrow eyebrow--light">Private Resort · San Luis</span>
        <h1>Your private escape for family and friends</h1>
        <p>Swim, play, unwind and celebrate together. The whole resort is yours.</p>
        <div className="hero__cta">
          <a className="btn" href="#contact">Book your stay</a>
          <a className="btn btn--ghost" href="#gallery">View gallery</a>
        </div>
      </div>
      <div className="container">
        <ul className="stats">
          {highlights.map((h) => (
            <li key={h.label}><strong>{h.value}</strong><span>{h.label}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
