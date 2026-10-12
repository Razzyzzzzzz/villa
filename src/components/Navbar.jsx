import { useEffect, useState } from "react";
import { images } from "../data/images";
import { navLinks, resort } from "../data/resort";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a className="brand" href="#top">
          <img className="brand__logo" src={images.logo} alt="" />
          <span>{resort.name}</span>
        </a>
        <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn--sm" href="#contact" onClick={() => setOpen(false)}>Book now</a>
        </nav>
      </div>
    </header>
  );
}
