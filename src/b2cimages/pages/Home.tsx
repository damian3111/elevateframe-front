import HeroSection from "../components/sections/HeroSection";
import SocialProofBar from "../components/sections/SocialProofBar";
import TransformationSection from "../components/sections/TransformationSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import StylesSection from "../components/sections/StylesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import PricingSection from "../components/sections/PricingSection";
import GuaranteeSection from "../components/sections/GuaranteeSection";
import FAQSection from "../components/sections/FAQSection";
import FinalCTASection from "../components/sections/FinalCTASection";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
<>

<div className="page-shell">
      <div className="bg-orb one" />
      <div className="bg-orb two" />
      <div className="bg-orb three" />

      <Header />

      <main>
        <HeroSection />
        <SocialProofBar />
        <TransformationSection />
        <HowItWorksSection />
         <StylesSection /> 
        {/* <OfferSection /> */}
        {/* <GalleryPreviewSection /> */}
        <TestimonialsSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection/>

      </main>

      <Footer />
      {/* <StickyMobileCTA /> */}
    </div>
</>
    
  );
}