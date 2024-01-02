import "./tailwind.css";
import Hero from './components/Hero'
import Features from "./components/Features"; 
import Stats from "./components/Stats"; 
import Testimonials from "./components/Testimonials"; 
import Pricing from "./components/Pricing"; 
import Support from "./components/Support"; 
import Faq from "./components/Faq"; 
import Contact from "./components/Contact"; 
import Footer from "./components/Footer"; 

function App() {

  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <Support />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App
