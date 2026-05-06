"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const items = [
  {
    name: "Birthday Cakes",
    desc: "Personalised, tiered masterpieces for every age. Photo prints, fondant art, fresh flowers & more.",
    from: "₦8,000",
    tag: "Most Popular",
    img: "https://i.pinimg.com/736x/2d/3a/4e/2d3a4e8a9c6b1f5e2d3a4e8a9c6b1f5e.jpg",
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".menu-card");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={ref}
      style={{
        background: "linear-gradient(160deg, #fdf6ec 0%, #fef9f3 60%, #f9f0e4 100%)",
        padding: "130px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative text */}
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

      <div style={{ maxWidth: "1360px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "80px",
          flexWrap: "wrap",
          gap: "24px",
        }}>
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}>
              <span style={{ width: "40px", height: "1px", background: "#c8853a" }} />
              <span style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#c8853a",
                fontFamily: "'Lora', serif",
              }}>
                Our Offerings
              </span>
              <span style={{ width: "40px", height: "1px", background: "#c8853a" }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(38px, 5vw, 58px)",
              fontWeight: 700,
              color: "#2e1f14",
              lineHeight: 1.08,
              margin: 0,
            }}>
              Crafted with{" "}
              <em style={{ color: "#c8853a", fontStyle: "italic" }}>Intention</em>
            </h2>
            <p style={{
              marginTop: "16px",
              color: "#7a5c48",
              fontFamily: "'Lora', serif",
              fontSize: "15px",
              lineHeight: 1.75,
              maxWidth: "420px",
            }}>
              Every item is baked fresh — never rushed, always made with the finest ingredients and a whole lot of love.
            </p>
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#2e1f14",
              color: "#fdf6ec",
              padding: "14px 28px",
              borderRadius: "50px",
              fontFamily: "'Lora', serif",
              fontSize: "14px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "background 0.25s, transform 0.2s",
              flexShrink: 0,
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

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}>
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
                transitionDelay: `${i * 0.07}s`,
                cursor: "default",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 30px 60px rgba(92,61,46,0.16)";
                const img = el.querySelector(".card-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 20px rgba(92,61,46,0.07)";
                const img = el.querySelector(".card-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Image */}
              <div style={{
                position: "relative",
                height: "230px",
                overflow: "hidden",
                background: "#f5ede0",
              }}>
                <img
                  className="card-img"
                  src={item.realImg}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(30,15,8,0.55) 0%, transparent 55%)",
                }} />

                {/* Tag badge */}
                {item.tag && (
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: "#c8853a",
                    color: "#fff",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: "50px",
                    fontFamily: "'Lora', serif",
                  }}>
                    {item.tag}
                  </div>
                )}

                {/* Price on image bottom */}
                <div style={{
                  position: "absolute",
                  bottom: "14px",
                  right: "16px",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.04em",
                }}>
                  from {item.from}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px 28px 28px" }}>
                {/* Accent line */}
                <div style={{
                  width: "32px",
                  height: "2px",
                  background: item.accent,
                  borderRadius: "2px",
                  marginBottom: "14px",
                }} />

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#2e1f14",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}>
                  {item.name}
                </h3>

                <p style={{
                  fontSize: "13.5px",
                  color: "#7a5c48",
                  lineHeight: 1.75,
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  margin: 0,
                }}>
                  {item.desc}
                </p>

                <div style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <a
                    href="#contact"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: item.accent,
                      textDecoration: "none",
                      textTransform: "uppercase",
                      fontFamily: "'Lora', serif",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "gap 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.gap = "10px";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.gap = "6px";
                    }}
                  >
                    Order Now <span style={{ fontSize: "16px" }}>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA note */}
        <div style={{
          textAlign: "center",
          marginTop: "64px",
          fontFamily: "'Lora', serif",
          fontStyle: "italic",
          color: "#7a5c48",
          fontSize: "15px",
        }}>
          ✦ &nbsp; All items available for delivery across Owerri &nbsp; ✦
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

        .menu-card.reveal {
          opacity: 0;
          transform: translateY(32px);
        }
        .menu-card.reveal.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, background 0.4s;
        }

        @media (max-width: 1024px) {
          #menu > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #menu {
            padding: 80px 20px !important;
          }
          #menu > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}