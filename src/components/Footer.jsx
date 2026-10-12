import { images } from "../data/images";
import { navLinks, resort } from "../data/resort";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img className="footer__logo" src={images.logo} alt={resort.fullName} />
        <nav>{navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}</nav>
        <p>{resort.address} · <a href={`mailto:${resort.email}`}>{resort.email}</a></p>
        <small>© {new Date().getFullYear()} {resort.fullName}. All rights reserved.</small>
      </div>
    </footer>
  );
}
