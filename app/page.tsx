import Topnavbar from "@/src/components/Topnavbar";
import HeroSection from "@/src/sections/HeroSection";
import ProblemSolution from "@/src/sections/ProblemSolution";
import DemoShowcase from "@/src/sections/DemoShowcase";
import HowItWorks from "@/src/sections/HowItWorks";
import WhyXenbird from "@/src/sections/WhyXenbird";
import CTASection from "@/src/sections/CTASection";
import Footer from "@/src/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-xenbird-secondary selection:text-white">
      <Topnavbar />
      
      <div className="flex flex-col">
        <HeroSection />
        <ProblemSolution />
        <DemoShowcase />      {/* Focus on the Demos, as requested */}
        <HowItWorks />
        <WhyXenbird />        {/* The required differentiation section */}
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}