"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = {
    Navigate: ["About", "Menu", "Gallery", "Reviews"],
    Contact: ["0911 733 9803", "Takeaway Available", "Delivery Available", "Open 24 Hours"],
    Location: ["7th Ave, FHE", "Egbeada, Owerri", "Imo State, Nigeria", "460281"],
  };

  return (
    <footer style={{ background: "var(--choco)", color: "var(--ivory)" }}>
      {/* Top banner */}
      <div style={{
        borderBottom: "1px solid rgba(255,249,242,0.07)",
        padding: "64px 60px",
        display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
        gap: "48px",
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px", fontWeight: 700,
            color: "var(--ivory)", marginBottom: "16px",
          }}>
            Delia&apos;s <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Torte</span>
          </div>
          <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(255,249,242,0.45)", maxWidth: "260px", marginBottom: "28px" }}>
            Artisan cakes, cupcakes & confections handcrafted with love in the heart of Owerri, Imo State.
          </p>
          {/* Stars */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
            ))}
          </div>
          <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,249,242,0.3)" }}>
            5.0 · Google Rating
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
              {title}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {items.map(item => (
                <li key={item}>
                  {title === "Navigate" ? (
                    <a href={`#${item.toLowerCase()}`} style={{
                      fontSize: "13px", color: "rgba(255,249,242,0.5)",
                      textDecoration: "none", transition: "color 0.2s",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--ivory)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,249,242,0.5)")}
                    >{item}</a>
                  ) : (
                    <span style={{ fontSize: "13px", color: "rgba(255,249,242,0.5)" }}>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        padding: "20px 60px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontSize: "12px", color: "rgba(255,249,242,0.25)" }}>
          © {year} Delia&apos;s Torte. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Service"].map(item => (
            <a key={item} href="#" style={{
              fontSize: "12px", color: "rgba(255,249,242,0.25)",
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,249,242,0.6)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,249,242,0.25)")}
            >{item}</a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; padding: 48px 20px !important; }
          footer > div:last-child { padding: 16px 20px !important; flex-direction: column !important; gap: 8px !important; text-align: center !important; }
        }
        @media (max-width: 500px) {
          footer > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
