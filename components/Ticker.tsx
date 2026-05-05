"use client";
const items = ["Birthday Cakes","Wedding Cakes","Small Chops","Cupcakes","Surprise Packages","Custom Designs","Open 24 Hours","Delivery Available","Owerri & Environs"];
export default function Ticker() {
  const all = [...items, ...items];
  return (
    <div style={{ background: "var(--choco)", borderTop: "1px solid rgba(201,168,76,0.2)", padding: "14px 0", overflow: "hidden" }}>
      <div className="animate-ticker" style={{ display: "flex", gap: "0", width: "max-content", alignItems: "center" }}>
        {all.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0" }}>
            <span style={{ padding: "0 28px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.8)", whiteSpace: "nowrap" }}>{item}</span>
            <span style={{ color: "rgba(201,168,76,0.3)", fontSize: "16px" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}