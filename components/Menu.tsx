"use client";
import { useEffect, useRef } from "react";

const items = [
  { emoji: "🎂", name: "Birthday Cakes", desc: "Personalised, tiered masterpieces for every age. Photo prints, fondant art, fresh flowers & more.", from: "₦8,000", tag: "Most Popular" },
  { emoji: "💍", name: "Wedding Cakes", desc: "Architectural, multi-tiered cakes designed around your love story. Gold leaf, fondant, floral accents.", from: "₦45,000", tag: "Signature" },
  { emoji: "🧁", name: "Cupcakes", desc: "Individually decorated cupcakes for events, showers, and corporate gatherings. Custom photo prints available.", from: "₦2,500", tag: null },
  { emoji: "🍢", name: "Small Chops", desc: "Crowd-pleasing finger food: puff puff, samosas, mini spring rolls, chicken skewers. Perfect for any event.", from: "₦5,000", tag: null },
  { emoji: "🎁", name: "Surprise Packages", desc: "Curated gift hampers and surprise cake deliveries across Owerri. We handle everything.", from: "₦12,000", tag: "Fan Favourite" },
  { emoji: "✨", name: "Custom Creations", desc: "Have a vision? Sculpted novelty cakes, theme designs, character cakes — anything imaginable.", from: "Call Us", tag: "Bespoke" },
];

export default function Menu() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const cards = el.querySelectorAll(".menu-card");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="menu" ref={ref} style={{ background: "var(--cream)", padding: "120px 60px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "var(--caramel)" }} />
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--caramel)" }}>Our Offerings</span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700,
              color: "var(--choco)", lineHeight: 1.1,
            }}>
              Crafted with <em style={{ color: "var(--caramel)", fontStyle: "italic" }}>Intention</em>
            </h2>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            <span>Place Custom Order</span>
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)" }}>
          {items.map((item, i) => (
            <div key={item.name} className="menu-card reveal" style={{
              background: "var(--ivory)",
              padding: "40px 36px",
              position: "relative",
              cursor: "default",
              transition: "all 0.35s ease",
              transitionDelay: `${i * 0.08}s`,
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--choco)";
                el.querySelectorAll(".menu-title, .menu-desc, .menu-price, .menu-emoji").forEach((n: Element) => {
                  const node = n as HTMLElement;
                  if (n.classList.contains("menu-title")) node.style.color = "var(--ivory)";
                  if (n.classList.contains("menu-desc")) node.style.color = "rgba(255,249,242,0.6)";
                  if (n.classList.contains("menu-price")) node.style.color = "var(--gold)";
                });
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--ivory)";
                el.querySelectorAll(".menu-title, .menu-desc, .menu-price, .menu-emoji").forEach((n: Element) => {
                  const node = n as HTMLElement;
                  if (n.classList.contains("menu-title")) node.style.color = "var(--choco)";
                  if (n.classList.contains("menu-desc")) node.style.color = "var(--muted)";
                  if (n.classList.contains("menu-price")) node.style.color = "var(--caramel)";
                });
              }}
            >
              {item.tag && (
                <div style={{
                  position: "absolute", top: "20px", right: "20px",
                  background: "var(--gold)", color: "var(--choco)",
                  fontSize: "9px", fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", padding: "4px 10px",
                }}>{item.tag}</div>
              )}
              <div className="menu-emoji" style={{ fontSize: "36px", marginBottom: "20px" }}>{item.emoji}</div>
              <div className="menu-title" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px", fontWeight: 600,
                color: "var(--choco)", marginBottom: "12px",
                transition: "color 0.35s",
              }}>{item.name}</div>
              <div className="menu-desc" style={{
                fontSize: "14px", color: "var(--muted)", lineHeight: 1.75,
                fontWeight: 300, marginBottom: "20px",
                transition: "color 0.35s",
              }}>{item.desc}</div>
              <div className="menu-price" style={{
                fontSize: "13px", fontWeight: 600,
                letterSpacing: "0.08em", color: "var(--caramel)",
                transition: "color 0.35s",
              }}>FROM {item.from}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #menu .grid-3 { grid-template-columns: 1fr !important; }
          #menu { padding: 80px 20px !important; }
          #menu > div > div:first-child { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}