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
    <>
      <BackgroundShapes />
      <Navbar />
      <SideElements />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
