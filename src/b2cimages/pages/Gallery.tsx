import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import GlowButton from "../components/ui/GlowButton";

const gallery = [
  "/images/gallery/mafia-1.jpg",
  "/images/gallery/mafia-2.jpg",
  "/images/gallery/luxury-1.jpg",
  "/images/gallery/warrior-1.jpg",
  "/images/gallery/couple-1.jpg",
  "/images/gallery/ceo-1.jpg",
  "/images/gallery/rap-1.jpg",
  "/images/gallery/king-1.jpg",
  "/images/gallery/queen-1.jpg",
];

export default function Gallery() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <Container>
          <SectionTitle
            eyebrow="Full gallery"
            title="Visual proof sells this business"
            subtitle="As you get more customers, replace these with real examples and separate by style categories."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {gallery.map((src) => (
              <div
                key={src}
                className="glass"
                style={{ borderRadius: "24px", overflow: "hidden" }}
              >
                <img src={src} alt="Gallery portrait" style={{ aspectRatio: "4/5", objectFit: "cover" }} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <GlowButton to="/order">Order My Portrait →</GlowButton>
          </div>
        </Container>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}