import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users, Music, Camera, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Crystal Ballroom Interior"
            className="w-full h-full object-cover"
            loading="eager"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 tracking-tight">
            Tentang Kami
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Menciptakan Momen Tak Terlupakan dengan Keanggunan dan Kemewahan
          </p>
        </motion.div>
      </div>
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* History Section */}
          <ScrollAnimation className="max-w-4xl mx-auto mb-24" delay={0.2}>
            <div className="prose max-w-none">
              <ScrollAnimation className="text-center mb-16" delay={0.3}>
                <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-6">Sejarah dan Filosofi</h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.4}>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Crystal Ballroom Season City didirikan pada tahun 2015 dengan visi untuk menjadi venue acara premium di Jakarta Barat. 
                  Terinspirasi oleh ballroom klasik Eropa dengan sentuhan modern, kami menciptakan ruang yang elegan namun tetap hangat 
                  untuk berbagai acara penting dalam hidup Anda.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.5}>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Filosofi kami adalah memberikan pengalaman tak terlupakan melalui perhatian pada detail, layanan prima, dan 
                  fleksibilitas untuk memenuhi kebutuhan unik setiap klien. Nama "Crystal" melambangkan kejelasan visi kami dalam 
                  mewujudkan impian klien serta kemewahan yang kami tawarkan.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation className="text-center mt-16" delay={0.6}>
                <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-6">Lokasi Strategis</h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.7}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Berlokasi di pusat Season City Mall, Jakarta Barat, Crystal Ballroom menawarkan akses mudah dari berbagai 
                  area di Jakarta dan kota satelit. Dengan area parkir luas dan akses ke berbagai fasilitas mall, lokasi kami 
                  menjadi pilihan ideal untuk acara Anda.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          
          {/* Facilities Section */}
          <ScrollAnimation className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 mb-24 shadow-xl" delay={0.3}>
            <ScrollAnimation className="text-center mb-16" delay={0.4}>
              <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-6">Fasilitas Unggulan</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Kami menyediakan fasilitas premium untuk memastikan acara Anda berjalan sempurna
              </p>
            </ScrollAnimation>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Users className="h-8 w-8 text-gold" />,
                  title: "Kapasitas Luas",
                  description: "Mampu menampung hingga 1000 tamu untuk standing party dan 500 tamu untuk round-table setup."
                },
                {
                  icon: <Music className="h-8 w-8 text-gold" />,
                  title: "Sound System",
                  description: "Sistem audio profesional dengan akustik ruangan yang dirancang khusus untuk menghasilkan suara terbaik."
                },
                {
                  icon: <Camera className="h-8 w-8 text-gold" />,
                  title: "Lighting",
                  description: "Sistem pencahayaan modern dan dapat disesuaikan untuk menciptakan suasana yang diinginkan."
                },
                {
                  icon: <MapPin className="h-8 w-8 text-gold" />,
                  title: "VIP Room",
                  description: "Ruang eksklusif untuk pengantin atau tamu VIP, dilengkapi dengan fasilitas premium."
                },
                {
                  icon: <Clock className="h-8 w-8 text-gold" />,
                  title: "Fleksibilitas Waktu",
                  description: "Jam operasional yang panjang dan fleksibel untuk menyesuaikan dengan kebutuhan acara Anda."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-gold" />,
                  title: "Area Parkir",
                  description: "Tersedia area parkir luas yang dapat menampung ratusan kendaraan tamu Anda."
                }
              ].map((facility, index) => (
                <ScrollAnimation
                  key={index}
                  delay={0.1 * index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="p-4 rounded-full bg-gold/10 mr-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {facility.icon}
                    </motion.div>
                    <h3 className="font-playfair font-bold text-2xl text-gray-800">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{facility.description}</p>
                </ScrollAnimation>
              ))}
            </motion.div>
          </ScrollAnimation>
          
          {/* Team Section */}
          <ScrollAnimation className="text-center max-w-4xl mx-auto" delay={0.3}>
            <ScrollAnimation className="mb-16" delay={0.4}>
              <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-6">Tim Profesional</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Tim kami terdiri dari profesional berpengalaman yang siap membantu Anda merencanakan dan melaksanakan acara 
                sempurna. Dari koordinator acara hingga staf teknis, kami berkomitmen memberikan layanan terbaik.
              </p>
            </ScrollAnimation>
            
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gold text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gold/90"
              >
                Konsultasi Dengan Tim Kami
                <Sparkles className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
