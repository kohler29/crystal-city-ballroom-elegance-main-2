import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

// Gallery images with categories
const galleryItems = [
  // Wedding Category
  {
    id: 1,
    category: "wedding",
    title: "Pernikahan Anita & Budi",
    image: "/foto/wedding.jpg",
    description: "Pernikahan mewah dengan tema garden wedding",
    date: "2024-03-15"
  },
  // Ballroom Category
  {
    id: 2,
    category: "ballroom",
    title: "Crystal Ballroom Main Hall",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Ruang utama ballroom dengan kapasitas hingga 1000 tamu",
    date: "2024-03-01"
  },
  {
    id: 3,
    category: "ballroom",
    title: "VIP Lounge Area",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Area VIP yang eksklusif untuk tamu spesial",
    date: "2024-03-01"
  },
  // Decoration Category
  {
    id: 4,
    category: "decoration",
    title: "Dekorasi Pernikahan Modern",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Dekorasi pernikahan dengan tema modern minimalis",
    date: "2024-02-20"
  },
  {
    id: 5,
    category: "decoration",
    title: "Dekorasi Pernikahan Tradisional",
    image: "/foto/deco.png",
    description: "Dekorasi pernikahan dengan sentuhan tradisional Indonesia",
    date: "2024-02-15"
  },
  {
    id: 6,
    category: "decoration",
    title: "Dekorasi Corporate Event",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Dekorasi untuk acara korporat dengan tema profesional",
    date: "2024-01-10"
  },
  // Corporate Category
  {
    id: 7,
    category: "corporate",
    title: "Annual Gala PT Global Solutions",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Acara tahunan perusahaan dengan tema futuristik",
    date: "2024-01-10"
  },
  // Birthday Category
  {
    id: 8,
    category: "birthday",
    title: "50th Birthday Celebration",
    image: "https://images.unsplash.com/photo-1533294455009-a6f974f65676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Perayaan ulang tahun ke-50 dengan tema vintage",
    date: "2024-03-01"
  },
  // Ballroom Category
  {
    id: 9,
    category: "ballroom",
    title: "Crystal Ballroom Stage",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Panggung utama dengan sistem audio dan lighting profesional",
    date: "2024-03-01"
  },
  {
    id: 10,
    category: "ballroom",
    title: "Crystal Ballroom Entrance",
    image: "https://images.unsplash.com/photo-1519741347686-c1e331fdab4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Area masuk yang megah dan elegan",
    date: "2024-03-01"
  },
  // Decoration Category
  {
    id: 11,
    category: "decoration",
    title: "Dekorasi Birthday Party",
    image: "/foto/GP.png",
    description: "Dekorasi pesta ulang tahun dengan tema ceria",
    date: "2024-02-25"
  },
  {
    id: 12,
    category: "decoration",
    title: "Dekorasi Graduation Party",
    image: "/foto/GP.png",
    description: "Dekorasi pesta wisuda dengan tema akademik",
    date: "2024-02-20"
  }
];

const categories = [
  { id: "all", label: "Semua" },
  { id: "ballroom", label: "Ballroom" },
  { id: "decoration", label: "Dekorasi" },
  { id: "wedding", label: "Pernikahan" },
  { id: "corporate", label: "Korporat" },
  { id: "birthday", label: "Ulang Tahun" }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredGallery = galleryItems
    .filter(item => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  const openImageDialog = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
    setOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-20 pt-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4">Galeri</h1>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
              Lihat bagaimana Crystal Ballroom telah menjadi bagian dari momen spesial klien kami. 
              Telusuri galeri kami untuk mendapatkan inspirasi untuk acara Anda.
            </p>
          </motion.div>
          
          {/* Search and Filter Section */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Cari acara..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <select
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "date" | "title")}
                >
                  <option value="date">Urutkan berdasarkan Tanggal</option>
                  <option value="title">Urutkan berdasarkan Judul</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category.id 
                      ? "bg-gold text-white shadow-lg scale-105" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredGallery.map(item => (
                  <motion.div 
                    key={item.id}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-all hover:shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openImageDialog(item)}
                  >
                    <div className="relative h-64">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full text-white">
                          <h3 className="font-playfair font-bold text-lg">{item.title}</h3>
                          <p className="text-sm capitalize mb-2">{item.category}</p>
                          <p className="text-sm opacity-90">{item.description}</p>
                          <p className="text-xs mt-2">{new Date(item.date).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          
          {filteredGallery.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">Tidak ada acara yang ditemukan.</p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">
              Tertarik mengadakan acara Anda di Crystal Ballroom? Hubungi kami untuk konsultasi gratis.
            </p>
            <motion.a 
              href="/contact" 
              className="btn-gold inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Konsultasi Gratis
            </motion.a>
          </div>
        </div>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain"
                loading="eager"
                width={1200}
                height={800}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                <h3 className="font-playfair font-bold text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-sm capitalize mb-2">{selectedImage.category}</p>
                <p className="text-sm mb-2">{selectedImage.description}</p>
                <p className="text-xs opacity-80">
                  {new Date(selectedImage.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Gallery;
