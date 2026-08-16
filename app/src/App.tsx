import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Specialists } from "./components/Specialists";
import { Team } from "./components/Team";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-secondary font-body text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Specialists />
        <Team />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
