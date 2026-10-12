import SectionHeading from "./SectionHeading";
import { images } from "../data/images";
import { amenities } from "../data/resort";

export default function Amenities() {
  return (
    <section id="amenities" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Amenities" title="Everything you need for a great stay"
          text="Relax by the pool, play games, or gather around the lounge." />
        <div className="grid">
          {amenities.map((a, i) => (
            <article key={a.title} className="card reveal" style={{ "--d": `${i * 70}ms` }}>
              <div className="card__img"><img src={images[a.image]} alt={a.title} loading="lazy" /></div>
              <div className="card__body"><h3>{a.title}</h3><p>{a.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
