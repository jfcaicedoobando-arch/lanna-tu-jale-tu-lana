import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import RequirementsSection from '@/components/RequirementsSection';
import InvestorsSection from '@/components/InvestorsSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferentiatorsSection />
      <InvestorsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
