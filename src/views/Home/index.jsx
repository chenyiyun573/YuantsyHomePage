import Hero from './components/Hero';
import BusinessCategories from './components/BusinessCategories/index.JSX';
import LargeTestimonial from './components/LargeTestimonial';
import Features from './components/Features';
import Features2 from './components/Features2';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
const Home = () => {
  return (
    <>
      {/* <!-- Hero section --> */}
      <Hero />
      {/* <!-- Business Categories --> */}
      <BusinessCategories />
      {/* <!-- Large testimonial --> */}
      <LargeTestimonial />
      {/* <!-- Features --> */}
      <Features />
      {/* <!-- Features #2 --> */}
      <Features2 />
      {/* <!-- Testimonials --> */}
      <Testimonials />
      {/* <!-- CTA --> */}
      <CTA />
    </>
  )
}

export default Home;