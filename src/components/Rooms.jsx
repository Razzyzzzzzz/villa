import SectionHeading from "./SectionHeading";
import { images } from "../data/images";
import { rooms } from "../data/resort";

export default function Rooms() {
  return (
    <section id="rooms" className="section">
      <div className="container">
        <SectionHeading eyebrow="Stay" title="Comfortable rooms for every group" text="Clean, air-conditioned rooms with private bathrooms." />
        <div className="grid grid--rooms">
          {rooms.map((r, i) => (
            <article key={r.title} className="card card--room reveal" style={{ "--d": `${i * 80}ms` }}>
              <div className="card__img"><img src={images[r.image]} alt={r.title} loading="lazy" /></div>
              <div className="card__body"><span className="tag">{r.tag}</span><h3>{r.title}</h3><p>{r.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
