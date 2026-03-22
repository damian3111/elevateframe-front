import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import GlowButton from "../components/ui/GlowButton";

export default function Order() {
  return (
    <div className="page-shell">
      <Header />

      <main className="section">
        <Container>
          <SectionTitle
            eyebrow="Start your order"
            title="Send your photos. We’ll do the rest."
            subtitle="You can wire this form to Formspree, EmailJS, your backend, Supabase, or a custom API later."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: "1.5rem",
            }}
            className="two-col"
          >
            <GlassCard>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Connect this form to your backend / Formspree / EmailJS.");
                }}
                style={{ display: "grid", gap: "1rem" }}
              >
                <Input label="Full name" placeholder="John Smith" />
                <Input label="Email" placeholder="john@example.com" type="email" />
                <Input label="Instagram / WhatsApp (optional)" placeholder="@johnsmith or +48..." />

                <div>
                  <label style={labelStyle}>Choose package</label>
                  <select style={inputStyle}>
                    <option>Digital — $99</option>
                    <option>Legendary — $149</option>
                    <option>Collector — $249</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Choose style</label>
                  <select style={inputStyle}>
                    <option>Mob Boss</option>
                    <option>Old Money</option>
                    <option>CEO / Magazine Cover</option>
                    <option>Warrior / Viking</option>
                    <option>Rap / Album Cover</option>
                    <option>Couple / Romantic</option>
                    <option>Custom Concept</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Describe your vision</label>
                  <textarea
                    rows={6}
                    placeholder="Example: I want a dark luxury mob boss vibe, black suit, gold watch, cigar, cinematic lighting, expensive penthouse background..."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Photo upload (connect later)</label>
                  <input
                    type="file"
                    multiple
                    style={{
                      ...inputStyle,
                      padding: "14px",
                    }}
                  />
                </div>

                <GlowButton>Create My Portrait →</GlowButton>
              </form>
            </GlassCard>

            <GlassCard>
              <h3 style={{ marginTop: 0 }}>What happens after you order?</h3>
              <div style={{ display: "grid", gap: "1rem", color: "var(--muted)", lineHeight: 1.8 }}>
                <div>1. We review your photos and style choice.</div>
                <div>2. We create your initial concepts within 48 hours.</div>
                <div>3. You choose your favorite direction.</div>
                <div>4. We refine and deliver your final masterpiece.</div>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "16px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ fontWeight: 900, marginBottom: "0.5rem" }}>Pro tip:</div>
                <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                  Ask customers to upload:
                  <ul style={{ paddingLeft: "1.2rem" }}>
                    <li>front-facing photos</li>
                    <li>different angles</li>
                    <li>good lighting</li>
                    <li>no sunglasses if possible</li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input type={type} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: 800,
  color: "var(--muted)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 18px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
};