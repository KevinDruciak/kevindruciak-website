import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundShapes from "@/components/BackgroundShapes";
import SideElements from "@/components/SideElements";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <BackgroundShapes />
      <Navbar />
      <SideElements />
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
