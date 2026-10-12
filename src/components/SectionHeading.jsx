export default function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={`heading reveal ${center ? "heading--center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
