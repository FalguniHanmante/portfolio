import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        {/* The lilac line below is the resume-style spine; each Section adds a node on it */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-l-2 border-lilac dark:border-lilac/60">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}