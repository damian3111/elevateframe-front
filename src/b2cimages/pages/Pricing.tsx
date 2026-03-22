import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";
import PricingSection from "../components/sections/PricingSection";
import GuaranteeSection from "../components/sections/GuaranteeSection";
import FAQSection from "../components/sections/FAQSection";

export default function Pricing() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}