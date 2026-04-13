import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CompanyLogos } from "@/components/company-logos"
import { PartnerAdvantages } from "@/components/partner-advantages"
import { PartnershipPrograms } from "@/components/partnership-programs"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function PartnersPage() {
  return (
    <div className="max-w-screen w-scrrenmin-h-screen bg-[#0A0914]  text-white overflow-hidden">
      <Header />
      <HeroSection />
      <CompanyLogos />
      <PartnerAdvantages />
      <PartnershipPrograms />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
