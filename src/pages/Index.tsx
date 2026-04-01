import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhyLannaSection from "@/components/WhyLannaSection";
import InvestorsSection from "@/components/InvestorsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyLannaSection />
      <InvestorsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
