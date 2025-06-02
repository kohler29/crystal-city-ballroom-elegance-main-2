
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users, Music, Camera } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-20 pt-32 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-8">Tentang Kami</h1>
          
          <div className="max-w-4xl mx-auto mb-16">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Crystal Ballroom Interior"
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
            
            <div className="prose max-w-none">
              <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-4">Sejarah dan Filosofi</h2>
              <p className="text-gray-700 mb-6">
                Crystal Ballroom Season City didirikan pada tahun 2015 dengan visi untuk menjadi venue acara premium di Jakarta Barat. 
                Terinspirasi oleh ballroom klasik Eropa dengan sentuhan modern, kami menciptakan ruang yang elegan namun tetap hangat 
                untuk berbagai acara penting dalam hidup Anda.
              </p>
              <p className="text-gray-700 mb-6">
                Filosofi kami adalah memberikan pengalaman tak terlupakan melalui perhatian pada detail, layanan prima, dan 
                fleksibilitas untuk memenuhi kebutuhan unik setiap klien. Nama "Crystal" melambangkan kejelasan visi kami dalam 
                mewujudkan impian klien serta kemewahan yang kami tawarkan.
              </p>
              
              <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-4 mt-12">Lokasi Strategis</h2>
              <p className="text-gray-700 mb-6">
                Berlokasi di pusat Season City Mall, Jakarta Barat, Crystal Ballroom menawarkan akses mudah dari berbagai 
                area di Jakarta dan kota satelit. Dengan area parkir luas dan akses ke berbagai fasilitas mall, lokasi kami 
                menjadi pilihan ideal untuk acara Anda.
              </p>
            </div>
          </div>
          
          <div className="bg-marble-light rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center text-gray-800 mb-10">Fasilitas Unggulan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gold-light mr-4">
                    <Users className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl">Kapasitas Luas</h3>
                </div>
                <p className="text-gray-600">
                  Mampu menampung hingga 1000 tamu untuk standing party dan 500 tamu untuk round-table setup.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gold-light mr-4">
                    <Music className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl">Sound System</h3>
                </div>
                <p className="text-gray-600">
                  Sistem audio profesional dengan akustik ruangan yang dirancang khusus untuk menghasilkan suara terbaik.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gold-light mr-4">
                    <Camera className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl">Lighting</h3>
                </div>
                <p className="text-gray-600">
                  Sistem pencahayaan modern dan dapat disesuaikan untuk menciptakan suasana yang diinginkan.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gold-light mr-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl">VIP Room</h3>
                </div>
                <p className="text-gray-600">
                  Ruang eksklusif untuk pengantin atau tamu VIP, dilengkapi dengan fasilitas premium.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gold-light mr-4">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl">Fleksibilitas Waktu</h3>
                </div>
                <p className="text-gray-600">
                  Jam operasional yang panjang dan fleksibel untuk menyesuaikan dengan kebutuhan acara Anda.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gold-light mr-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-bold text-xl">Area Parkir</h3>
                </div>
                <p className="text-gray-600">
                  Tersedia area parkir luas yang dapat menampung ratusan kendaraan tamu Anda.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-6">Tim Profesional</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-10">
              Tim kami terdiri dari profesional berpengalaman yang siap membantu Anda merencanakan dan melaksanakan acara 
              sempurna. Dari koordinator acara hingga staf teknis, kami berkomitmen memberikan layanan terbaik.
            </p>
            
            <div className="flex justify-center">
              <a href="/contact" className="btn-gold">
                Konsultasi Dengan Tim Kami
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
