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
                  src="/weeding.jpg" 
                  alt="Crystal Ballroom Interior" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/hero.jpg" 
                  alt="Wedding Setup" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/Table.jpg" 
                  alt="Table Setting" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/venue.jpg"  
                  alt="Venue Details" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  width={800}
                  height={600}
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
