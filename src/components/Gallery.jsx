import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import { images } from "../data/images";
import { gallery, galleryTabs } from "../data/gallery";

// Tile shapes repeat every 8 photos and always fill complete rows.
const SHAPES = ["gx--big", "", "", "gx--wide", "gx--wide", "gx--big", "", ""];

export default function Gallery() {
  const [tab, setTab] = useState("All");
  const [index, setIndex] = useState(null);

  const items = useMemo(
    () => (tab === "All" ? gallery : gallery.filter((g) => g.category === tab)),
    [tab]
  );
  const countFor = (t) => (t === "All" ? gallery.length : gallery.filter((g) => g.category === t).length);

  return (
    <section id="gallery" className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="A look around the resort" text="Browse by category, or tap any photo to view it full size." />

        <div className="gx-tabs" role="tablist" aria-label="Gallery categories">
          {galleryTabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={`gx-tab ${tab === t ? "is-active" : ""}`}
              onClick={() => { setTab(t); setIndex(null); }}
            >
              {t}<span>{countFor(t)}</span>
            </button>
          ))}
        </div>

        <div className="gx-grid" key={tab}>
          {items.map((item, i) => (
            <button
              key={item.image}
              className={`gx-tile ${SHAPES[i % SHAPES.length]}`}
              style={{ "--d": `${i * 45}ms` }}
              onClick={() => setIndex(i)}
              aria-label={`View ${item.title}`}
            >
              <img src={images[item.image]} alt={item.title} loading="lazy" style={{ objectPosition: item.focus }} />
              <span className="gx-cap"><small>{item.category}</small>{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <Lightbox items={items} index={index} onClose={() => setIndex(null)} onSelect={setIndex} />
      )}
    </section>
  );
}