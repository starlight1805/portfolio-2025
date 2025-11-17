import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Terminal, Mail, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion'; // <-- Import Variants

interface NavigationProps {
  activeSection: string;
}

// Define the structure for navigation items, including the LucideIcon type
interface NavItem {
    id: string;
    label: string;
    Icon: LucideIcon;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock the scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'about', label: 'About', Icon: User },
    { id: 'experience', label: 'Experience', Icon: Briefcase },
    { id: 'projects', label: 'Projects', Icon: Code },
    { id: 'skills', label: 'Skills', Icon: Terminal },
    { id: 'contact', label: 'Contact', Icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // ------------------------------------------------------------------
  // FIX APPLIED: Using 'as const' on the entire variants object
  // ------------------------------------------------------------------
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            type: 'spring', 
            stiffness: 80, 
            damping: 15 
        } 
    },
    exit: { opacity: 0, x: '100%' }
  } as const; // <-- This resolves the TypeScript error

  return (
    <>
      {/* 1. Desktop: Floating Dock Navigation (Trendy and Unique) */}
      <nav 
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex 
                   bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-cyan-500/10 p-2"
      >
        <div className="flex space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const ActiveIcon = item.Icon;

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group
                  ${isActive 
                    ? 'bg-cyan-500/15 text-cyan-400 shadow-lg shadow-cyan-500/20' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                <ActiveIcon size={16} className={`mr-2 transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'}`} />
                {item.label}
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* 2. Mobile: Menu Button and Off-Canvas Sidebar */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-cyan-400 p-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 shadow-lg hover:bg-slate-700/80 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          // Mobile Menu: Full-screen sidebar sliding in from the right
          <motion.div
            // Variants are now correctly typed due to the 'as const' definition
            variants={mobileMenuVariants as Variants} 
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col space-y-4 pt-24 px-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const MobileIcon = item.Icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center text-xl font-medium p-3 rounded-lg transition-colors duration-200 text-left
                      ${isActive 
                        ? 'text-cyan-400 bg-cyan-400/10 border-l-4 border-cyan-400' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    <MobileIcon size={24} className="mr-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;