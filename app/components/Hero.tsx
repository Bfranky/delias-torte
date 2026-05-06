"use client";
import Image from "next/image";

// Free-to-use Unsplash cake images (no auth required via unsplash source)
const CAKE_MAIN = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85&auto=format&fit=crop";
const CAKE_SECOND = "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=85&auto=format&fit=crop";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "var(--choco)",
    }}>
      {/* Background radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(200,149,108,0.18) 0%, transparent 55%),
          radial-gradient(circle at 80% 20%, rgba(201,168,76,0.12) 0%, transparent 55%)`,
        pointerEvents: "none",
      }} />

      {/* Decorative concentric rings */}
      {[700, 560, 420].map((size, i) => (
        <div key={size} style={{
          position: "absolute",
          right: `${-120 + i * 20}px`,
          top: "50%",
          transform: "translateY(-50%)",
          width: `${size}px`, height: `${size}px`,
          border: `1px solid rgba(201,168,76,${0.12 - i * 0.03})`,
          borderRadius: "50%",
          pointerEvents: "none",
        }} />
      ))}

      {/* Main content grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "120px 60px 80px",
        position: "relative", zIndex: 1,
      }}>

        {/* ── LEFT: Text ── */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "60px" }}>

          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            marginBottom: "32px",
          }}>
            <span style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
            <span style={{
              fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--gold)",
            }}>Artisan Cake Studio · Owerri, Imo State</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 5.5vw, 76px)",
            fontWeight: 700, lineHeight: 1.05,
            color: "var(--ivory)", marginBottom: "28px",
          }}>
            Every Cake,<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>A Masterpiece</em>
          </h1>

          {/* Body */}
          <p style={{
            fontSize: "16px", lineHeight: 1.9, fontWeight: 300,
            color: "rgba(255,249,242,0.65)",
            maxWidth: "420px", marginBottom: "44px",
          }}>
            Bespoke cakes, cupcakes, small chops &amp; birthday surprises handcrafted in Owerri.
            Open 24 hours — because celebrations don&apos;t wait.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#menu" className="btn-primary">
              <span>Explore Menu</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-outline"
              style={{ borderColor: "rgba(255,249,242,0.3)", color: "var(--ivory)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,249,242,0.08)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,249,242,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,249,242,0.3)"; }}
            >
              Place an Order
            </a>
          </div>

          {/* Stats bar */}
          <div style={{
            display: "flex", gap: "40px",
            marginTop: "64px", paddingTop: "40px",
            borderTop: "1px solid rgba(255,249,242,0.1)",
          }}>
            {[
              { val: "5.0", label: "Star Rating" },
              { val: "24h", label: "Always Open" },
              { val: "100%", label: "Handcrafted" },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "28px", fontWeight: 700,
                  color: "var(--gold)", lineHeight: 1, marginBottom: "6px",
                }}>{stat.val}</div>
                <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,249,242,0.35)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image collage ── */}
        <div style={{ position: "relative", minHeight: "560px" }}>

          {/* Main cake image — large, floating */}
          <div
            className="animate-float"
            style={{
              position: "absolute", top: "40px", right: "0",
              width: "340px", height: "420px",
              overflow: "hidden",
              boxShadow: "0 48px 96px rgba(0,0,0,0.55)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85&auto=format&fit=crop"
              alt="Elegant layered birthday cake with chocolate frosting"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, rgba(61,26,14,0.85))",
              padding: "28px 18px 16px",
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px", fontStyle: "italic", color: "var(--ivory)", opacity: 0.9,
              }}>
                Signature Birthday Cake
              </div>
            </div>
          </div>

          {/* Second cake image */}
          <div style={{
            position: "absolute", bottom: "30px", left: "10px",
            width: "210px", height: "260px",
            overflow: "hidden",
            boxShadow: "0 28px 56px rgba(0,0,0,0.45)",
            border: "3px solid var(--choco)",
            zIndex: 2,
          }}>
            <img
              src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=85&auto=format&fit=crop"
              alt="Chocolate drip cake with decorations"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Gold rating badge */}
          <div style={{
            position: "absolute", top: "16px", left: "48px",
            width: "92px", height: "92px",
            background: "var(--gold)",
            borderRadius: "50%",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            boxShadow: "0 12px 32px rgba(201,168,76,0.45)",
            zIndex: 4,
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "26px", fontWeight: 700,
              color: "var(--choco)", lineHeight: 1,
            }}>5.0</div>
            <div style={{
              fontSize: "9px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--choco)", marginTop: "4px", opacity: 0.75,
            }}>RATED</div>
          </div>

          {/* Decorative corner accent */}
          <div style={{
            position: "absolute", top: "20px", right: "-12px",
            width: "60px", height: "60px",
            border: "1px solid rgba(201,168,76,0.25)",
            zIndex: 0,
          }} />
          <div style={{
            position: "absolute", bottom: "10px", right: "-20px",
            width: "100px", height: "100px",
            border: "1px solid rgba(201,168,76,0.12)",
            zIndex: 0,
          }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
        opacity: 0.35,
      }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ivory)" }}>Scroll</span>
        <div style={{ width: "1px", height: "44px", background: "linear-gradient(var(--ivory), transparent)" }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero > div:nth-child(3) { grid-template-columns: 1fr !important; padding: 110px 24px 60px !important; }
          #hero > div:nth-child(3) > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
