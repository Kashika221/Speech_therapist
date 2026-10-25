import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8E7FF] to-[#C9D4FF] px-4 py-8">
      <div className="w-full max-w-5xl mx-auto space-y-8">
        
        {/* Main Card - Hero Section */}
        <div id="home" className="rounded-[32px] shadow-xl bg-[#F6F5FF]">
          <div className="p-8 md:p-12 flex flex-col gap-8">
            <Navbar scrollToSection={scrollToSection} />
            <Hero />
          </div>
        </div>

        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
