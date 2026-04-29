import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import resume from "../../imports/taiye-resume.pdf";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`md:text-3xl text-2xl font-bold transition-colors ${
              isScrolled ? "text-[#C89B6D]" : "text-white"
            }`}
          >
            taiye.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-[#C89B6D] ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href={resume}
              className="bg-[#C89B6D] text-white px-6 py-2 rounded-full font-medium hover:bg-[#A67C52] transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden mt-4 pb-4 space-y-2 bg-white"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#C89B6D] font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <a
                href={resume}
                className="block mx-4 w-fit text-center bg-[#C89B6D] text-white px-6 py-3 rounded-full font-medium hover:bg-[#A67C52] transition-colors mt-2"
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
