import { useEffect } from "react";

export default function Lightbox({ src, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox__btn lightbox__close" aria-label="Close" onClick={onClose}>✕</button>
      <button className="lightbox__btn lightbox__prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>
      <img src={src} alt="Villa Espino" onClick={(e) => e.stopPropagation()} />
      <button className="lightbox__btn lightbox__next" aria-label="Next" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
    </div>
  );
}
