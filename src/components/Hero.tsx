
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
            The Perfect Venue <br />
            for Your Special Day
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
            Crystal Ballroom Season City menyediakan ruang yang elegan dan mewah untuk pernikahan, ulang tahun, dan acara korporat Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-gold inline-block text-center">
              Cek Jadwal Tersedia
            </Link>
            <Link to="/packages" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-800 transition-colors duration-300 text-center">
              Lihat Paket
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
