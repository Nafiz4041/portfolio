import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Nafiz | Business Development Executive';

    // Cursor glow
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Reveal on scroll
    const checkReveals = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', checkReveals);
    setTimeout(checkReveals, 200);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', checkReveals);
    };
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Noise + cursor overlays */}
      <div className="noise-overlay" />
      <div ref={cursorRef} className="cursor-glow" />

      {/* Animated mesh background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="blob animate-blob-move absolute w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[100px] bg-blue-700" style={{ top: '-5%', left: '-10%' }} />
        <div className="blob animate-blob-move absolute w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[100px] bg-purple-900" style={{ bottom: '10%', right: '-5%', animationDelay: '-7s' }} />
        <div className="blob animate-blob-move absolute w-[280px] h-[280px] rounded-full opacity-[0.12] blur-[100px] bg-cyan-700" style={{ top: '50%', left: '45%', animationDelay: '-13s' }} />
      </div>

      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
