
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Crystal Ballroom</h3>
            <p className="text-gray-400 mb-4">
              Venue mewah untuk pernikahan, ulang tahun, dan acara korporat di Jakarta Barat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Galeri", path: "/gallery" },
                { name: "Paket", path: "/packages" },
                { name: "Testimoni", path: "/testimonials" },
                { name: "Kontak", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Our Packages</h4>
            <ul className="space-y-2">
              {[
                { name: "Wedding", path: "/packages#wedding" },
                { name: "Birthday", path: "/packages#birthday" },
                { name: "Corporate", path: "/packages#corporate" },
                { name: "Customize Package", path: "/contact" }
              ].map((pkg) => (
                <li key={pkg.name}>
                  <Link to={pkg.path} className="text-gray-400 hover:text-gold transition-colors">
                    {pkg.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-1" />
                <span className="text-gray-400">
                  Season City Mall, Lantai 5<br />
                  Jl. Prof Dr. Latumenten No.33, Jakarta Barat
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 text-gold mr-2" />
                <span className="text-gray-400">+62 (21) 5436 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <span className="text-gray-400">info@crystalballroom.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {currentYear} Crystal Ballroom Season City. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
