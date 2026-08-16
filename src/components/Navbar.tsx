import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-[#F5F5F5] px-6 md:px-12 py-6 flex justify-between items-center">
      <Link to="/" className="text-3xl font-display tracking-wider">
        ROHAN
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
        <a href="/#about" className="hover:text-[#D90000] transition-colors">About</a>
        <a href="/#work" className="hover:text-[#D90000] transition-colors">Work</a>
        <a href="/#experience" className="hover:text-[#D90000] transition-colors">Experience</a>
        <a href="/#skills" className="hover:text-[#D90000] transition-colors">Skills</a>
        <a href="/#contact" className="hover:text-[#D90000] transition-colors">Contact</a>
        <button 
          onClick={() => setIsLight(!isLight)}
          className="ml-4 hover:text-[#D90000] transition-colors"
          aria-label="Toggle theme"
        >
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
      <button className="md:hidden text-sm font-medium tracking-widest uppercase">
        Menu
      </button>
    </nav>
  );
}
