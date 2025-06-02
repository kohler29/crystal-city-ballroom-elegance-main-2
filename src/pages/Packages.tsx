
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PackageFeature {
  title: string;
  included: boolean;
}

interface PackageTier {
  id: string;
  title: string;
  price: string;
  description: string;
  features: PackageFeature[];
  primaryColor: string;
  secondaryColor: string;
  recommended?: boolean;
}

const weddingPackages: PackageTier[] = [
  {
    id: "wedding-silver",
    title: "Silver",
    price: "Rp 75.000.000",
    description: "Paket dasar untuk pernikahan intim dengan sentuhan elegan.",
    primaryColor: "bg-gray-200",
    secondaryColor: "bg-gray-100",
    features: [
      { title: "Kapasitas 200 tamu", included: true },
      { title: "Dekorasi standar", included: true },
      { title: "Catering standard menu", included: true },
      { title: "Sound system dasar", included: true },
      { title: "6 jam penggunaan", included: true },
      { title: "Ruang ganti pengantin", included: true },
      { title: "MC profesional", included: false },
      { title: "Dokumentasi photo & video", included: false },
      { title: "After party area", included: false },
    ],
  },
  {
    id: "wedding-gold",
    title: "Gold",
    price: "Rp 120.000.000",
    description: "Paket lengkap untuk pernikahan menengah dengan layanan premium.",
    primaryColor: "bg-gold",
    secondaryColor: "bg-gold-light",
    recommended: true,
    features: [
      { title: "Kapasitas 350 tamu", included: true },
      { title: "Dekorasi premium", included: true },
      { title: "Catering premium menu", included: true },
      { title: "Sound system premium", included: true },
      { title: "8 jam penggunaan", included: true },
      { title: "Ruang ganti pengantin", included: true },
      { title: "MC profesional", included: true },
      { title: "Dokumentasi photo & video", included: true },
      { title: "After party area", included: false },
    ],
  },
  {
    id: "wedding-platinum",
    title: "Platinum",
    price: "Rp 180.000.000",
    description: "Paket mewah all-inclusive untuk pernikahan besar.",
    primaryColor: "bg-slate-700",
    secondaryColor: "bg-slate-100",
    features: [
      { title: "Kapasitas 500 tamu", included: true },
      { title: "Dekorasi custom mewah", included: true },
      { title: "Catering premium menu", included: true },
      { title: "Sound system premium", included: true },
      { title: "10 jam penggunaan", included: true },
      { title: "VIP room & ruang ganti", included: true },
      { title: "MC profesional", included: true },
      { title: "Dokumentasi photo & video", included: true },
      { title: "After party area", included: true },
    ],
  },
];

const birthdayPackages: PackageTier[] = [
  {
    id: "birthday-basic",
    title: "Basic",
    price: "Rp 35.000.000",
    description: "Paket dasar untuk perayaan ulang tahun.",
    primaryColor: "bg-blue-500",
    secondaryColor: "bg-blue-100",
    features: [
      { title: "Kapasitas 100 tamu", included: true },
      { title: "Dekorasi standar", included: true },
      { title: "Catering menu standar", included: true },
      { title: "Sound system dasar", included: true },
      { title: "4 jam penggunaan", included: true },
      { title: "Birthday cake stand", included: true },
      { title: "MC", included: false },
      { title: "Dokumentasi", included: false },
    ],
  },
  {
    id: "birthday-deluxe",
    title: "Deluxe",
    price: "Rp 55.000.000",
    description: "Paket lengkap untuk perayaan ulang tahun spesial.",
    primaryColor: "bg-purple-500",
    secondaryColor: "bg-purple-100",
    recommended: true,
    features: [
      { title: "Kapasitas 200 tamu", included: true },
      { title: "Dekorasi tema custom", included: true },
      { title: "Catering premium menu", included: true },
      { title: "Sound system premium", included: true },
      { title: "6 jam penggunaan", included: true },
      { title: "Birthday cake & dessert table", included: true },
      { title: "MC", included: true },
      { title: "Dokumentasi", included: true },
    ],
  },
];

const corporatePackages: PackageTier[] = [
  {
    id: "corporate-meeting",
    title: "Meeting",
    price: "Rp 25.000.000",
    description: "Paket untuk rapat dan pertemuan bisnis.",
    primaryColor: "bg-gray-700",
    secondaryColor: "bg-gray-100",
    features: [
      { title: "Kapasitas 50 tamu", included: true },
      { title: "Setup theater/classroom", included: true },
      { title: "Coffee break", included: true },
      { title: "Proyektor & screen", included: true },
      { title: "Sound system standar", included: true },
      { title: "4 jam penggunaan", included: true },
      { title: "Lunch/dinner", included: false },
    ],
  },
  {
    id: "corporate-event",
    title: "Event",
    price: "Rp 65.000.000",
    description: "Paket untuk acara korporat besar.",
    primaryColor: "bg-green-600",
    secondaryColor: "bg-green-100",
    recommended: true,
    features: [
      { title: "Kapasitas 200 tamu", included: true },
      { title: "Setup flexible", included: true },
      { title: "Coffee break & meals", included: true },
      { title: "Proyektor & screen", included: true },
      { title: "Sound system premium", included: true },
      { title: "8 jam penggunaan", included: true },
      { title: "Stage backdrop custom", included: true },
    ],
  },
  {
    id: "corporate-gala",
    title: "Gala Dinner",
    price: "Rp 100.000.000",
    description: "Paket mewah untuk gala dinner dan acara penghargaan.",
    primaryColor: "bg-red-800",
    secondaryColor: "bg-red-100",
    features: [
      { title: "Kapasitas 300 tamu", included: true },
      { title: "Setup round table premium", included: true },
      { title: "Fine dining menu", included: true },
      { title: "Audio-visual setup lengkap", included: true },
      { title: "Stage & lighting mewah", included: true },
      { title: "8 jam penggunaan", included: true },
      { title: "Red carpet", included: true },
      { title: "MC profesional", included: true },
    ],
  },
];

const PackageSection = ({ title, id, packages }: { title: string, id: string, packages: PackageTier[] }) => {
  return (
    <section id={id} className="py-16">
      <h2 className="text-3xl font-playfair font-bold text-center mb-12">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl ${
              pkg.recommended ? "transform hover:-translate-y-2 ring-2 ring-gold" : "hover:-translate-y-1"
            }`}
          >
            <div className={`${pkg.primaryColor} text-white p-6 relative`}>
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-0 rotate-45">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-2xl font-playfair font-bold mb-2">{pkg.title}</h3>
              <div className="text-3xl font-bold mb-2">{pkg.price}</div>
              <p className="opacity-90">{pkg.description}</p>
            </div>
            
            <div className={`${pkg.secondaryColor} p-6 flex flex-col h-full`}>
              <ul className="space-y-4 mb-6 flex-grow">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`mr-2 rounded-full p-1 mt-0.5 ${feature.included ? pkg.primaryColor : 'bg-gray-200'}`}>
                      <Check className={`h-3 w-3 ${feature.included ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <span className={feature.included ? 'text-gray-800' : 'text-gray-400 line-through'}>
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className={`w-full py-3 px-4 text-center rounded-md font-semibold transition-colors ${
                  pkg.primaryColor.replace('bg-', 'bg-') === pkg.primaryColor 
                    ? pkg.primaryColor + ' text-white hover:opacity-90' 
                    : pkg.primaryColor + ' text-white hover:opacity-90'
                }`}
              >
                Pesan Sekarang
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-20 pt-32 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4">Paket Layanan</h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
            Kami menawarkan berbagai paket yang dapat disesuaikan untuk memenuhi kebutuhan acara Anda.
            Semua paket dapat dimodifikasi sesuai permintaan.
          </p>
          
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#wedding" 
                className="px-6 py-3 bg-gold text-white font-semibold rounded-md hover:bg-gold-dark transition-colors"
              >
                Wedding
              </a>
              <a 
                href="#birthday" 
                className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition-colors"
              >
                Birthday
              </a>
              <a 
                href="#corporate" 
                className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
              >
                Corporate
              </a>
            </div>
          </div>
          
          <PackageSection 
            title="Wedding Packages" 
            id="wedding" 
            packages={weddingPackages} 
          />
          
          <div className="border-t border-gray-200 my-16"></div>
          
          <PackageSection 
            title="Birthday Packages" 
            id="birthday" 
            packages={birthdayPackages} 
          />
          
          <div className="border-t border-gray-200 my-16"></div>
          
          <PackageSection 
            title="Corporate Packages" 
            id="corporate" 
            packages={corporatePackages} 
          />
          
          <div className="bg-marble-light rounded-lg p-8 mt-16">
            <h2 className="text-2xl font-playfair font-bold text-center mb-6">Butuh Paket Kustom?</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
              Kami memahami bahwa setiap acara unik. Tim kami siap membantu merancang paket khusus
              yang sesuai dengan kebutuhan dan anggaran Anda.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn-gold">
                Konsultasi Paket Kustom
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Packages;
