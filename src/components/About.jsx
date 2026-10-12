import SectionHeading from "./SectionHeading";
import { images } from "../data/images";
import { aboutPoints } from "../data/resort";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__media reveal">
          <img className="about__main" src={images["welcome-wall"]} alt="Villa Espino welcome wall" />
          <img className="about__accent" src={images["loungers"]} alt="Poolside loungers" />
        </div>
        <div className="reveal">
          <SectionHeading center={false} eyebrow="About us" title="Welcome to Villa Espino"
            text="Established in 2024, Villa Espino is a modern, relaxing getaway for family reunions, birthdays and barkada weekends, with the whole place to yourselves." />
          <ul className="checks">
            {aboutPoints.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <a className="btn" href="#contact">Ask about availability</a>
        </div>
      </div>
    </section>
  );
}
