import {
  ClientSection,
  FeatureSection,
  FooterSection,
  Header,
  HeroSection,
  ProfitSection,
  SEOAboutSection,
  ServiceSection,
  StepsSection,
  StrategiesSection,
  TeamSection,
} from "@/components"

export default function Home() {
  return (
    <div className="max-w[1024px]">
      <div className="bg-[#F5F3EA] min-h-screen p-3 md:px-[50px]">
        <Header />
        <HeroSection />
      </div>
      <FeatureSection />
      <ProfitSection />
      <StrategiesSection />
      <div className="md:px-[50px] p-4 bg-[#F5F3EA]">
        <SEOAboutSection />
        <StepsSection />
      </div>
      <TeamSection />
      <div className="md:px-[50px] p-4 bg-[#F5F3EA]">
        <ServiceSection />
        <ClientSection />
      </div>
      <FooterSection />
    </div>
  )
}
