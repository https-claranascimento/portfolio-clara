import { useCallback, useState } from "react";
import "@/App.css";
import useLenis from "@/hooks/useLenis";
import Nav from "@/components/Nav";
import Loader from "@/components/Loader";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import EditorialMarquee from "@/sections/Marquee";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

function App() {
  useLenis();
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <div className="relative bg-ink min-h-screen text-bone" data-testid="site-root">
      <Loader onDone={handleReady} />
      <div className="grain-overlay" aria-hidden />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <EditorialMarquee />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
