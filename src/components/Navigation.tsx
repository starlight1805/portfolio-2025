import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('home')}
          className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}
        >
          VVV
        </button>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white/90 hover:text-white'
              } ${activeSection === item.id ? 'after:w-full' : 'after:w-0'}
              after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-slate-900' : 'text-slate-700'
                } hover:text-slate-900`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
