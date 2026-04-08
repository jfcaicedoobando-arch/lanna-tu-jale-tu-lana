import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ProductsSection from '@/components/ProductsSection';
import TrustSection from '@/components/TrustSection';
import RequirementsSection from '@/components/RequirementsSection';
import FooterSection from '@/components/FooterSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent" />
);

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <Divider />
      <ProblemSolutionSection />
      <Divider />
      <ProductsSection />
      <Divider />
      <TrustSection />
      <Divider />
      <RequirementsSection />
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
