import ComparePlans from "./components/ComparePlans";
import CTA from "./components/CTA";
import FAQs from "./components/FAQs";
import PricingTables from "./components/PricingTables";
import Testimonials from "./components/Testimonials";

const Pricing = () => {
  return (
    <>
      <PricingTables />
      <ComparePlans />
      <Testimonials />
      <FAQs />
      <CTA />
    </>
  );
};

export default Pricing;
