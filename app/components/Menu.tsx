"use client";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    name: "Birthday Cakes",
    desc: "Personalised, tiered masterpieces for every age. Photo prints, fondant art, fresh flowers & more.",
    from: "₦8,000",
    tag: "Most Popular",
    realImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    accent: "#c8853a",
  },
  {
    name: "Wedding Cakes",
    desc: "Architectural, multi-tiered cakes designed around your love story. Gold leaf, fondant, floral accents.",
    from: "₦45,000",
    tag: "Signature",
    realImg: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80",
    accent: "#b8966e",
  },
  {
    name: "Cupcakes",
    desc: "Individually decorated cupcakes for events, showers, and corporate gatherings. Custom photo prints available.",
    from: "₦2,500",
    tag: null,
    realImg: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&q=80",
    accent: "#d4896a",
  },
  {
    name: "Small Chops",
    desc: "Crowd-pleasing finger food: puff puff, samosas, mini spring rolls, chicken skewers. Perfect for any event.",
    from: "₦5,000",
    tag: null,
    realImg: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=600&q=80",
    accent: "#8a9e7e",
  },
  {
    name: "Surprise Packages",
    desc: "Curated gift hampers and surprise cake deliveries across Owerri. We handle everything.",
    from: "₦12,000",
    tag: "Fan Favourite",
    realImg: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    accent: "#c8853a",
  },
  {
    name: "Custom Creations",
    desc: "Have a vision? Sculpted novelty cakes, theme designs, character cakes — anything imaginable.",
    from: "Call Us",
    tag: "Bespoke",
    realImg: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
    accent: "#b8966e",
  },
];

export default function Menu() {
  const ref = useRef<HTMLElement>(null);
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCols(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".menu-card");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.06 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const isMobile = cols === 1;
  const isTablet = cols === 2;

  return (
    <section
      id="menu"
      ref={ref}
      style={{
        background: "linear-gradient(160deg, #fdf6ec 0%, #fef9f3 60%, #f9f0e4 100%)",
        padding: isMobile ? "80px 20px" : isTablet ? "100px 32px" : "130px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative watermark */}
      {!isMobile && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(100px, 18vw, 260px)",
            fontWeight: 800,
            color: "rgba(200,133,58,0.04)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.04em",
          }}
        >
          DELIAS
        </div>
      )}

      <div style={{ maxWidth: "1360px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            marginBottom: isMobile ? "48px" : "80px",
            gap: isMobile ? "28px" : "24px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <span style={{ width: "40px", height: "1px", background: "#c8853a" }} />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#c8853a",
                }}
              >
                Our Offerings
              </span>
              <span style={{ width: "40px", height: "1px", background: "#c8853a" }} />
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? "36px" : "clamp(38px, 5vw, 58px)",
                fontWeight: 700,
                color: "#2e1f14",
                lineHeight: 1.08,
                margin: 0,
              }}
            >
              Crafted with{" "}
              <em style={{ color: "#c8853a", fontStyle: "italic" }}>Intention</em>
            </h2>

            <p
              style={{
                marginTop: "16px",
                color: "#7a5c48",
                fontSize: "15px",
                lineHeight: 1.75,
                maxWidth: "420px",
                fontWeight: 300,
              }}
            >
              Every item is baked fresh — never rushed, always made with the finest ingredients
              and a whole lot of love.
            </p>
          </div>

          {/* ✅ Fixed: was missing the opening <a tag */}
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#2e1f14",
              color: "#fdf6ec",
              padding: isMobile ? "13px 24px" : "14px 28px",
              borderRadius: "50px",
              fontSize: isMobile ? "13px" : "14px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "background 0.25s, transform 0.2s",
              flexShrink: 0,
              alignSelf: isMobile ? "flex-start" : "auto",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#c8853a";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#2e1f14";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <span>✦</span> Place Custom Order
          </a>
        </div>

        {/* ── Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: isMobile ? "20px" : isTablet ? "20px" : "24px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.name}
              className="menu-card reveal"
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 2px 20px rgba(92,61,46,0.07)",
                border: "1px solid rgba(200,133,58,0.10)",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: isMobile ? "0s" : `${i * 0.07}s`,
                cursor: "default",
                position: "relative",
                display: isMobile ? "flex" : "block",
                flexDirection: isMobile ? "row" : undefined,
                alignItems: isMobile ? "stretch" : undefined,
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth < 640) return;
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 30px 60px rgba(92,61,46,0.16)";
                const img = el.querySelector(".card-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.07)";
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth < 640) return;
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 20px rgba(92,61,46,0.07)";
                const img = el.querySelector(".card-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* ── Image block ── */}
              <div
                style={{
                  position: "relative",
                  width: isMobile ? "120px" : "100%",
                  minWidth: isMobile ? "120px" : undefined,
                  height: isMobile ? "auto" : "220px",
                  minHeight: isMobile ? "140px" : undefined,
                  overflow: "hidden",
                  background: "#f5ede0",
                  flexShrink: isMobile ? 0 : undefined,
                }}
              >
                <img
                  className="card-img"
                  src={item.realImg}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    display: "block",
                  }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isMobile
                      ? "linear-gradient(to right, transparent 60%, rgba(30,15,8,0.25) 100%)"
                      : "linear-gradient(to top, rgba(30,15,8,0.55) 0%, transparent 55%)",
                  }}
                />

                {/* Tag badge — desktop only */}
                {item.tag && !isMobile && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      background: "#c8853a",
                      color: "#fff",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "5px 12px",
                      borderRadius: "50px",
                    }}
                  >
                    {item.tag}
                  </div>
                )}

                {/* Price — desktop only */}
                {!isMobile && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "14px",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "0.04em",
                    }}
                  >
                    from {item.from}
                  </div>
                )}
              </div>

              {/* ── Content block ── */}
              <div
                style={{
                  padding: isMobile ? "14px 16px" : "22px 26px 26px",
                  flex: isMobile ? 1 : undefined,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Mobile: tag + price row */}
                {isMobile && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      flexWrap: "wrap",
                      gap: "6px",
                    }}
                  >
                    {item.tag && (
                      <span
                        style={{
                          background: "#c8853a",
                          color: "#fff",
                          fontSize: "8px",
                          fontWeight: 700,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: "50px",
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: item.accent,
                      }}
                    >
                      from {item.from}
                    </span>
                  </div>
                )}

                {/* Accent bar */}
                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    background: item.accent,
                    borderRadius: "2px",
                    marginBottom: isMobile ? "8px" : "12px",
                  }}
                />

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: isMobile ? "16px" : "20px",
                    fontWeight: 700,
                    color: "#2e1f14",
                    marginBottom: isMobile ? "6px" : "10px",
                    lineHeight: 1.2,
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    fontSize: isMobile ? "12.5px" : "13.5px",
                    color: "#7a5c48",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    margin: 0,
                    display: isMobile ? "-webkit-box" : "block",
                    WebkitLineClamp: isMobile ? 3 : undefined,
                    WebkitBoxOrient: isMobile ? "vertical" : undefined,
                    overflow: isMobile ? "hidden" : undefined,
                  } as React.CSSProperties}
                >
                  {item.desc}
                </p>

                {/* ✅ Fixed: was missing the opening <a tag */}
                <a
                  href="#contact"
                  style={{
                    marginTop: isMobile ? "10px" : "18px",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: item.accent,
                    textDecoration: "none",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "gap 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.gap = "9px")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.gap = "5px")
                  }
                >
                  Order Now <span style={{ fontSize: "14px" }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: isMobile ? "48px" : "64px",
            fontStyle: "italic",
            color: "#7a5c48",
            fontSize: isMobile ? "13px" : "15px",
            opacity: 0.8,
          }}
        >
          ✦ &nbsp; All items available for delivery across Owerri &nbsp; ✦
        </div>
      </div>

      <style>{`
        .menu-card.reveal {
          opacity: 0;
          transform: translateY(28px);
        }
        .menu-card.reveal.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s, background 0.4s;
        }
      `}</style>
    </section>
  );
}