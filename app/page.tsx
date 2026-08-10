import { AboutSection } from "@/components/sections/AboutSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { SiteFrame } from "@/components/site/SiteFrame";

export default function Home() {
  return (
    <SiteFrame>
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
        <LeadFormSection />
        <ContactsSection />
      </main>
    </SiteFrame>
  );
}
