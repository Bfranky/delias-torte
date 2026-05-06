"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Elegant cake/bakery photo from Unsplash (free to use)
const ABOUT_IMAGE = "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&q=85&auto=format&fit=crop";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ background: "var(--ivory)", padding: "120px 60px" }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* ── LEFT: Text & info ── */}
        <div>
          <div
            className="reveal"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}
          >
            <span style={{ width: "32px", height: "1px", background: "var(--caramel)" }} />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--caramel)",
              }}
            >
              Our Story
            </span>
          </div>

          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--choco)",
              marginBottom: "28px",
            }}
          >
            Owerri&apos;s Most
            <br />
            Loved{" "}
            <em style={{ color: "var(--caramel)", fontStyle: "italic" }}>Cake Studio</em>
          </h2>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--muted)",
              fontWeight: 300,
              marginBottom: "20px",
            }}
          >
            Nestled in the vibrant community of Egbeada, Owerri, Delia&apos;s Torte has earned its
            reputation as the premier destination for artisan cakes and celebration confections
            across Imo State.
          </p>
          <p
            className="reveal reveal-delay-3"
            style={{
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--muted)",
              fontWeight: 300,
              marginBottom: "40px",
            }}
          >
            From intimate birthday cakes to grand wedding centrepieces, every creation is a labour
            of love — made with premium ingredients and meticulous attention to detail.
          </p>

          <div
            className="reveal reveal-delay-4"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
          >
            {[
              { icon: "📍", label: "Address", val: "7th Ave, FHE, Egbeada\nOwerri 460281, Imo" },
              { icon: "⏰", label: "Hours", val: "Open 24 Hours\nEvery Day of the Week" },
              { icon: "📞", label: "Phone", val: "0911 733 9803" },
              { icon: "🚗", label: "Service", val: "Takeaway & Delivery\nAcross Owerri" },
            ].map(({ icon, label, val }) => (
              <div
                key={label}
                style={{
                  background: "var(--cream)",
                  padding: "20px",
                  borderLeft: "3px solid var(--blush)",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderLeftColor = "var(--caramel)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderLeftColor = "var(--blush)")
                }
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--caramel)",
                    marginBottom: "6px",
                  }}
                >
                  {icon} {label}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--choco)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image with decorative frame ── */}
        <div className="reveal" style={{ position: "relative" }}>
          {/* Offset border frame */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "100%",
              height: "100%",
              border: "2px solid var(--blush)",
              zIndex: 0,
            }}
          />

          {/* Photo */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              aspectRatio: "4/5",
              overflow: "hidden",
              boxShadow: "0 32px 64px var(--shadow)",
            }}
          >
            <img
  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&q=85&auto=format&fit=crop"
  alt="Beautifully decorated artisan cake — Delia's Torte, Owerri"
  style={{
    width: "100%", height: "100%",
    objectFit: "cover", display: "block",
    transition: "transform 0.6s ease",
  }}
  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
/>
          </div>

          {/* Floating gold-accented quote card */}
          <div
            style={{
              position: "absolute",
              bottom: "-24px",
              left: "-32px",
              zIndex: 2,
              background: "var(--choco)",
              padding: "24px 28px",
              maxWidth: "280px",
              boxShadow: "0 20px 48px rgba(0,0,0,0.25)",
            }}
          >
            {/* Gold top bar */}
            <div
              style={{
                width: "32px",
                height: "2px",
                background: "var(--gold)",
                marginBottom: "14px",
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "14px",
                fontStyle: "italic",
                color: "var(--ivory)",
                lineHeight: 1.7,
                marginBottom: "14px",
              }}
            >
              Your best plug for cakes and birthday surprises in Owerri.
            </p>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              — Chiamaka Enyinna
            </div>
          </div>

          {/* Decorative corner dot grid */}
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              right: "-40px",
              width: "80px",
              height: "80px",
              backgroundImage:
                "radial-gradient(circle, var(--blush) 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              opacity: 0.6,
              zIndex: 0,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; padding: 0 !important; }
          #about { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}