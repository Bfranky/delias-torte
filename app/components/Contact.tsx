"use client";
import { useEffect, useRef, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  orderType: string;
  eventDate: string;
  message: string;
};

const initialForm: FormState = {
  firstName: "", lastName: "", phone: "", email: "",
  orderType: "Birthday Cake", eventDate: "", message: "",
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const items = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.MouseEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const Field = ({ label, name, type = "text", placeholder, required = false }: {
    label: string; name: keyof FormState; type?: string; placeholder: string; required?: boolean;
  }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{
        fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em",
        textTransform: "uppercase", color: "var(--muted)",
      }}>
        {label}{required && <span style={{ color: "var(--caramel)", marginLeft: "3px" }}>*</span>}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={e => { setForm(f => ({ ...f, [name]: e.target.value })); setErrors(er => ({ ...er, [name]: undefined })); }}
        placeholder={placeholder}
        style={{ borderColor: errors[name] ? "var(--caramel)" : undefined }}
      />
      {errors[name] && <span style={{ fontSize: "11px", color: "var(--caramel)" }}>{errors[name]}</span>}
    </div>
  );

  return (
    <section id="contact" ref={ref} style={{ background: "var(--cream)", padding: "120px 60px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px" }}>

        {/* Left info */}
        <div>
          <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "var(--caramel)" }} />
            <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--caramel)" }}>Get in Touch</span>
          </div>

          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700,
            color: "var(--choco)", lineHeight: 1.1, marginBottom: "20px",
          }}>
            Let&apos;s Create<br />
            Something <em style={{ color: "var(--caramel)", fontStyle: "italic" }}>Beautiful</em>
          </h2>

          <p className="reveal reveal-delay-2" style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--muted)", fontWeight: 300, marginBottom: "48px" }}>
            Ready to order or have a vision to share? Fill in the form and we&apos;ll get back to you promptly. Or call us directly — we&apos;re always available.
          </p>

          {/* Info blocks */}
          <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { icon: "📍", title: "Our Location", body: "7th Ave, FHE, Egbeada\nOwerri 460281, Imo State" },
              { icon: "📞", title: "Call Us Anytime", body: "0911 733 9803" },
              { icon: "⏰", title: "Opening Hours", body: "Open 24 Hours · 7 Days a Week" },
              { icon: "🚗", title: "Delivery", body: "Available across Owerri and environs" },
            ].map(({ icon, title, body }, i) => (
              <div key={title} style={{
                display: "flex", gap: "20px", padding: "24px 0",
                borderBottom: i < 3 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{
                  width: "48px", height: "48px", flexShrink: 0,
                  background: "var(--blush)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "20px",
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--caramel)", marginBottom: "4px" }}>{title}</div>
                  <div style={{ fontSize: "14px", color: "var(--choco)", lineHeight: 1.65, whiteSpace: "pre-line" }}>{body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="reveal reveal-delay-4" style={{
            marginTop: "40px", height: "180px",
            background: "var(--choco)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>📍</div>
              <div style={{ fontSize: "13px", color: "rgba(255,249,242,0.5)" }}>7th Ave, FHE, Egbeada, Owerri</div>
              <a
                href="https://maps.google.com/?q=Egbeada+Owerri+Imo+State"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block", marginTop: "12px",
                  fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.4)",
                  paddingBottom: "2px",
                }}>
                Open in Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="reveal" style={{ paddingTop: "0" }}>
          {status === "success" ? (
            <div style={{
              background: "var(--choco)",
              padding: "64px 48px",
              display: "flex", flexDirection: "column", alignItems: "center",
              textAlign: "center", gap: "16px",
              height: "100%", justifyContent: "center",
            }}>
              <div style={{ fontSize: "56px", marginBottom: "8px" }}>🎂</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "var(--ivory)", fontWeight: 700 }}>
                Order Received!
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,249,242,0.6)", lineHeight: 1.8, maxWidth: "300px" }}>
                Thank you, {form.firstName}! We&apos;ll be in touch shortly to discuss your {form.orderType.toLowerCase()}.
              </p>
              <button onClick={() => { setStatus("idle"); setForm(initialForm); }} className="btn-primary" style={{ marginTop: "16px" }}>
                <span>Send Another Enquiry</span>
              </button>
            </div>
          ) : (
            <div style={{
              background: "var(--ivory)",
              padding: "48px",
              boxShadow: "0 20px 60px var(--shadow)",
              display: "flex", flexDirection: "column", gap: "20px",
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "var(--choco)", fontWeight: 600, marginBottom: "8px" }}>
                Place Your Order
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <Field label="First Name" name="firstName" placeholder="Ada" required />
                <Field label="Last Name" name="lastName" placeholder="Okafor" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <Field label="Phone" name="phone" type="tel" placeholder="0801 234 5678" required />
                <Field label="Email" name="email" type="email" placeholder="ada@email.com" />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Order Type
                </label>
                <div style={{ position: "relative" }}>
                  <select value={form.orderType} onChange={e => setForm(f => ({ ...f, orderType: e.target.value }))}>
                    {["Birthday Cake","Wedding Cake","Cupcakes","Small Chops","Surprise Package","Custom Creation"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <svg style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1l5 5 5-5" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              <Field label="Event Date (Optional)" name="eventDate" type="date" placeholder="" />

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Message / Order Details <span style={{ color: "var(--caramel)" }}>*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: undefined })); }}
                  placeholder="Describe your order — theme, size, flavour, number of layers, specific decorations..."
                  style={{ height: "120px", resize: "none", borderColor: errors.message ? "var(--caramel)" : undefined }}
                />
                {errors.message && <span style={{ fontSize: "11px", color: "var(--caramel)" }}>{errors.message}</span>}
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", opacity: status === "loading" ? 0.7 : 1, marginTop: "8px" }}
              >
                <span>{status === "loading" ? "Sending Enquiry..." : "Send Enquiry"}</span>
                {status !== "loading" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </button>

              {status === "error" && (
                <p style={{ fontSize: "13px", color: "var(--caramel)", textAlign: "center" }}>
                  Something went wrong. Please call us directly on <strong>0911 733 9803</strong>.
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact { padding: 80px 20px !important; }
          #contact > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}