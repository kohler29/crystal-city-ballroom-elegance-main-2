
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-marble-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="section-title">Crystal Ballroom Season City</h2>
            <p className="text-gray-700 mb-6">
              Crystal Ballroom Season City adalah venue mewah dan elegan yang terletak di Jakarta Barat.
              Kami menawarkan pengalaman tak terlupakan untuk setiap acara spesial Anda, dengan perhatian
              khusus pada detail dan layanan berkualitas tinggi.
            </p>
            <p className="text-gray-700 mb-6">
              Dengan arsitektur menakjubkan, pencahayaan mewah, dan dekorasi elegan, Crystal Ballroom
              menyediakan latar belakang sempurna untuk merayakan momen penting dalam hidup Anda.
            </p>
            <Link to="/about" className="text-gold font-semibold hover:underline">
              Pelajari Lebih Lanjut &rarr;
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Crystal Ballroom Interior" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519741347686-c1e331fdab4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Wedding Setup" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1587825045005-c9cdef4a9af4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Table Setting" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1628244193864-0d0769884b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Venue Details" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
