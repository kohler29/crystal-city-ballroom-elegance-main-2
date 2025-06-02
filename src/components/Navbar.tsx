
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Tentang Kami", path: "/about" },
  { name: "Galeri", path: "/gallery" },
  { name: "Paket", path: "/packages" },
  { name: "Testimoni", path: "/testimonials" },
  { name: "Kontak", path: "/contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-black py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-playfair font-bold">
          <span className={cn("transition-colors", isScrolled ? "text-gold" : "text-white")}>
            Crystal Ballroom
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "font-montserrat font-medium transition-colors",
                isScrolled ? "text-gray-800 hover:text-gold" : "text-white hover:text-gold-light"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-montserrat text-gray-800 hover:text-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
