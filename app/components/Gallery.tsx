"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/cake-1.png", alt: "Photo-print birthday cake with Oreos & gold", label: "Photo-Print Birthday Cake", category: "Birthday" },
  { src: "/cake-2.png", alt: "Chocolate drip cake with candy toppers", label: "Chocolate Drip Cake", category: "Celebration" },
  { src: "/cake-3.png", alt: "Custom birthday cake with matching cupcake set", label: "Cake & Cupcake Set", category: "Birthday" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const items = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gallery" ref={ref} style={{ background: "var(--choco)", padding: "120px 60px", position: "relative", overflow: "hidden" }}>
      {/* bg texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>Our Work</span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700,
              color: "var(--ivory)", lineHeight: 1.1,
            }}>
              Made with <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Pride</em>
            </h2>
          </div>
          <p style={{ fontSize: "14px", color: "rgba(255,249,242,0.45)", maxWidth: "260px", textAlign: "right", lineHeight: 1.7 }}>
            Every creation is unique — handcrafted to bring your vision to life.
          </p>
        </div>

        {/* Main gallery grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "12px" }}>
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="reveal"
              style={{
                position: "relative",
                aspectRatio: i === 0 ? "3/4" : "3/4",
                overflow: "hidden",
                cursor: "zoom-in",
                transitionDelay: `${i * 0.12}s`,
              }}
              onClick={() => setActive(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                  transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
              {/* Hover overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(transparent 40%, rgba(61,26,14,0.85) 100%)",
                transition: "opacity 0.4s",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "28px 24px",
                transform: "translateY(8px)",
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
              }}>
                <div style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "6px" }}>
                  {photo.category}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontStyle: "italic", color: "var(--ivory)" }}>
                  {photo.label}
                </div>
              </div>
              {/* Zoom icon */}
              <div style={{
                position: "absolute", top: "16px", right: "16px",
                width: "36px", height: "36px",
                background: "rgba(255,249,242,0.15)",
                backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: 0, transition: "opacity 0.3s",
              }} className="zoom-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out",
          }}
          onClick={() => setActive(null)}
        >
          <div style={{ position: "relative", width: "min(90vw, 600px)", aspectRatio: "3/4" }}>
            <Image src={photos[active].src} alt={photos[active].alt} fill style={{ objectFit: "contain" }} />
          </div>
          <button onClick={() => setActive(null)} style={{
            position: "absolute", top: "24px", right: "24px",
            background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer",
            width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", borderRadius: "50%",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div style={{
            position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontStyle: "italic", color: "white", marginBottom: "4px" }}>
              {photos[active].label}
            </div>
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>
              {photos[active].category}
            </div>
          </div>
        </div>
      )}

      <style>{`
        #gallery .reveal > div:hover img { transform: scale(1.06); }
        #gallery .reveal > div:hover .zoom-icon { opacity: 1 !important; }
        @media (max-width: 900px) {
          #gallery { padding: 80px 20px !important; }
          #gallery > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}