import React from "react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: "wedding",
    title: "Wedding",
    icon: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    description: "Rayakan hari spesial Anda dengan paket pernikahan lengkap kami, mencakup dekorasi mewah, catering kelas atas, dan layanan personal."
  },
  {
    id: "birthday",
    title: "Birthday",
    icon: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Buat perayaan ulang tahun tak terlupakan dengan pilihan tema dan dekorasi yang dapat disesuaikan dengan preferensi Anda."
  },
  {
    id: "corporate",
    title: "Corporate",
    icon: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    description: "Tingkatkan citra perusahaan Anda dengan acara korporat di venue mewah kami, lengkap dengan fasilitas audio-visual modern."
  }
];

const PackagesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Packages</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Kami menawarkan berbagai paket untuk memenuhi kebutuhan setiap acara spesial Anda, 
            dengan layanan premium dan perhatian pada detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={pkg.icon} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <Link 
                  to={`/packages#${pkg.id}`} 
                  className="inline-block text-gold font-semibold hover:underline"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/packages" className="btn-gold inline-block">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PackagesSection);
