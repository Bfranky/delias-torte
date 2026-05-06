"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    text: "When it comes to cakes, small chops and birthday surprises in Owerri and environs, Delia's Torte is your best plug.",
    author: "Chiamaka Enyinna",
    role: "Google Local Guide · 43 Reviews",
    stars: 5,
    verified: true,
  },
  {
    text: "Absolutely stunning cakes every single time. The photo-print birthday cake we ordered was breathtaking — everyone at the party was amazed.",
    author: "Adaeze O.",
    role: "Regular Customer · Owerri",
    stars: 5,
    verified: true,
  },
  {
    text: "The small chops platter was the highlight of our event. Fresh, perfectly seasoned, and beautifully presented. Will definitely order again.",
    author: "Chisom N.",
    role: "Event Planner · Imo State",
    stars: 5,
    verified: false,
  },
];

export default function Reviews() {
  const ref = useRef<HTMLElement>(null);
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
    <section id="reviews" ref={ref} style={{ background: "var(--ivory)", padding: "120px 60px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "80px" }}>
          <div className="reveal">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "var(--caramel)" }} />
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--caramel)" }}>Testimonials</span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700,
              color: "var(--choco)", lineHeight: 1.1,
            }}>
              Words from<br />Our <em style={{ color: "var(--caramel)", fontStyle: "italic" }}>Customers</em>
            </h2>
          </div>

          {/* Big rating display */}
          <div className="reveal" style={{
            background: "var(--choco)", padding: "40px",
            display: "flex", alignItems: "center", gap: "32px",
          }}>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "80px", fontWeight: 700,
                lineHeight: 1, color: "var(--gold)",
              }}>5.0</div>
              <div style={{ display: "flex", gap: "4px", margin: "8px 0 6px" }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,249,242,0.4)" }}>
                Perfect Rating
              </div>
            </div>
            <div style={{ width: "1px", height: "80px", background: "rgba(255,249,242,0.1)" }} />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700, color: "var(--ivory)", lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,249,242,0.4)", marginTop: "6px" }}>
                Recommend Us
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {reviews.map((r, i) => (
            <div key={r.author} className="reveal" style={{
              background: "var(--cream)",
              padding: "36px",
              borderTop: "3px solid var(--gold)",
              transitionDelay: `${i * 0.1}s`,
              position: "relative",
            }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                {Array.from({ length: r.stars }).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>

              {/* Open quote */}
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", color: "var(--blush)", lineHeight: 0.8, marginBottom: "16px" }}>&ldquo;</div>

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "16px", fontStyle: "italic",
                lineHeight: 1.8, color: "var(--choco)",
                marginBottom: "28px",
              }}>{r.text}</p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "var(--blush)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "16px", color: "var(--cocoa)", fontWeight: 700,
                }}>
                  {r.author.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--choco)" }}>{r.author}</div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{r.role}</div>
                </div>
                {r.verified && (
                  <div style={{ marginLeft: "auto" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="var(--caramel)" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "60px" }}>
          <p style={{ fontSize: "15px", color: "var(--muted)", marginBottom: "24px" }}>
            Join hundreds of happy customers across Owerri and Imo State.
          </p>
          <a href="#contact" className="btn-primary">
            <span>Order Your Cake Today</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #reviews { padding: 80px 20px !important; }
          #reviews > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #reviews > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}