import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[200] px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass border-b border-white/10 py-3' : 'bg-transparent'}`}>
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/android-chrome-192x192.png" alt="Nafiz" className="w-9 h-9 rounded-xl object-cover object-top" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold hidden md:block text-white/50">Mohaiminul Nafiz</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-7">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="mailto:mohaiminnafiz13@gmail.com" className="px-5 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-600/30">
            Hire Me
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[300] glass flex flex-col items-center justify-center gap-8">
          <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="text-2xl font-bold hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
