import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import FlavourSections from "./sections/FlavourSections";
import Hero from "./sections/Hero";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <FlavourSections />
          <NutritionSection />

          <div>
            <BenefitSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
