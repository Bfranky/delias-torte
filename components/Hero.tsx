"use client";
import Image from "next/image";

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
      {/* Background texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(200,149,108,0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(201,168,76,0.1) 0%, transparent 50%)`,
      }} />

      {/* Decorative ring */}
      <div style={{
        position: "absolute", right: "-120px", top: "50%",
        transform: "translateY(-50%)",
        width: "700px", height: "700px",
        border: "1px solid rgba(201,168,76,0.15)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: "-80px", top: "50%",
        transform: "translateY(-50%)",
        width: "580px", height: "580px",
        border: "1px solid rgba(201,168,76,0.08)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "120px 60px 80px",
        position: "relative", zIndex: 1,
      }}>
        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "60px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginBottom: "28px",
          }}>
            <span style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
            <span style={{
              fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--gold)",
            }}>Artisan Cake Studio · Owerri, Imo State</span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 5.5vw, 76px)",
            fontWeight: 700, lineHeight: 1.05,
            color: "var(--ivory)", marginBottom: "28px",
          }}>
            Every Cake,<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>A Masterpiece</em>
          </h1>

          <p style={{
            fontSize: "16px", lineHeight: 1.85, fontWeight: 300,
            color: "rgba(255,249,242,0.68)",
            maxWidth: "420px", marginBottom: "44px",
          }}>
            Bespoke cakes, cupcakes, small chops & birthday surprises handcrafted in Owerri. Open 24 hours — because celebrations don&apos;t wait.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#menu" className="btn-primary">
              <span>Explore Menu</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline" style={{ borderColor: "rgba(255,249,242,0.3)", color: "var(--ivory)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,249,242,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              Place an Order
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: "40px", marginTop: "64px",
            paddingTop: "40px",
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
                  color: "var(--gold)", lineHeight: 1,
                  marginBottom: "4px",
                }}>{stat.val}</div>
                <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,249,242,0.4)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image collage */}
        <div style={{ position: "relative", minHeight: "560px" }}>
          {/* Main cake - large */}
          <div className="animate-float" style={{
            position: "absolute", top: "40px", right: "0",
            width: "340px", height: "400px",
            borderRadius: "2px",
            overflow: "hidden",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          }}>
            <Image src="public/cake1.jpg" alt="Birthday cake with photo print" fill style={{ objectFit: "cover" }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, rgba(61,26,14,0.8))",
              padding: "20px 16px 14px",
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontStyle: "italic", color: "var(--ivory)" }}>
                Photo-print Birthday Cake
              </div>
            </div>
          </div>

          {/* Second cake - overlapping */}
          <div style={{
            position: "absolute", bottom: "20px", left: "20px",
            width: "220px", height: "260px",
            borderRadius: "2px", overflow: "hidden",
            boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
            border: "3px solid var(--choco)",
            zIndex: 2,
          }}>
            <Image src="public/cake2.jpg" alt="Chocolate drip cake" fill style={{ objectFit: "cover" }} />
          </div>

          {/* Gold badge */}
          <div style={{
            position: "absolute", top: "20px", left: "60px",
            width: "90px", height: "90px",
            background: "var(--gold)", borderRadius: "50%",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 24px rgba(201,168,76,0.4)",
            zIndex: 3,
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: "var(--choco)", lineHeight: 1 }}>5.0</div>
            <div style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.1em", color: "var(--choco)", marginTop: "3px" }}>RATED</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        opacity: 0.4,
      }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ivory)" }}>Scroll</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(var(--ivory), transparent)" }} />
      </div>

      <style>{`
        @media (max-width: 767px) {
          #hero > div > div:first-child { grid-template-columns: 1fr !important; padding: 100px 20px 60px !important; }
          #hero > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}