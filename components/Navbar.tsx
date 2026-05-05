"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Menu", "Gallery", "Reviews", "Order"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        background: scrolled ? "rgba(250,245,238,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        padding: scrolled ? "16px 60px" : "28px 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "22px", fontWeight: 700,
          color: scrolled ? "var(--choco)" : "var(--ivory)",
          textDecoration: "none", letterSpacing: "0.02em",
        }}>
          Delia&apos;s <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Torte</span>
        </Link>

        <ul style={{ display: "flex", gap: "36px", listStyle: "none" }}>
          {links.map(l => (
            <li key={l} style={{ display: "none" }} className="desktop-nav-item">
              <a href={l === "Order" ? "#contact" : `#${l.toLowerCase()}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px", fontWeight: 500,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: scrolled ? "var(--muted)" : "rgba(255,249,242,0.85)",
                  textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--caramel)")}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "var(--muted)" : "rgba(255,249,242,0.85)")}
              >{l}</a>
            </li>
          ))}
        </ul>

        <a href="tel:09117339803" className="btn-primary" style={{ fontSize: "11px", padding: "10px 22px" }}>
          <span>0911 733 9803</span>
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} style={{
          display: "none", background: "none", border: "none", cursor: "pointer",
          color: scrolled ? "var(--choco)" : "var(--ivory)", padding: "4px",
        }} className="mobile-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 150,
          background: "var(--choco)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "32px",
        }}>
          {links.map(l => (
            <a key={l} href={l === "Order" ? "#contact" : `#${l.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "32px", fontWeight: 400, fontStyle: "italic",
                color: "var(--ivory)", textDecoration: "none",
              }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-item { display: list-item !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: block !important; }
          nav { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </>
  );
}