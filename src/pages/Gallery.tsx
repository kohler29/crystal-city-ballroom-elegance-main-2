
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Gallery images with categories
const galleryItems = [
  {
    id: 1,
    category: "wedding",
    title: "Pernikahan Anita & Budi",
    image: "https://images.unsplash.com/photo-1519741347686-c1e331fdab4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    category: "wedding",
    title: "Pernikahan Diana & Eko",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 3,
    category: "corporate",
    title: "Annual Gala PT Global Solutions",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
  },
  {
    id: 4,
    category: "birthday",
    title: "50th Birthday Celebration",
    image: "https://images.unsplash.com/photo-1533294455009-a6f974f65676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    category: "wedding",
    title: "Pernikahan Maya & Indra",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    category: "corporate",
    title: "Tech Conference 2023",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    category: "birthday",
    title: "Sweet 17 Birthday Party",
    image: "https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 8,
    category: "wedding",
    title: "Pernikahan Rita & Hendra",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 9,
    category: "corporate",
    title: "Product Launch Event",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 10,
    category: "birthday",
    title: "Kid's Birthday Party",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 11,
    category: "wedding",
    title: "Pernikahan Sarah & Dani",
    image: "https://images.unsplash.com/photo-1543290556-250f656ae35a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 12,
    category: "corporate",
    title: "End of Year Party",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [open, setOpen] = useState(false);

  const filteredGallery = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openImageDialog = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
    setOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-20 pt-32 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4">Galeri</h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
            Lihat bagaimana Crystal Ballroom telah menjadi bagian dari momen spesial klien kami. 
            Telusuri galeri kami untuk mendapatkan inspirasi untuk acara Anda.
          </p>
          
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === "all" 
                    ? "bg-gold text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setSelectedCategory("wedding")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === "wedding" 
                    ? "bg-gold text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Pernikahan
              </button>
              <button
                onClick={() => setSelectedCategory("birthday")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === "birthday" 
                    ? "bg-gold text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Ulang Tahun
              </button>
              <button
                onClick={() => setSelectedCategory("corporate")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === "corporate" 
                    ? "bg-gold text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Korporat
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map(item => (
              <div 
                key={item.id} 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:shadow-lg hover:scale-105"
                onClick={() => openImageDialog(item)}
              >
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full text-white">
                      <h3 className="font-playfair font-bold">{item.title}</h3>
                      <p className="text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">
              Tertarik mengadakan acara Anda di Crystal Ballroom? Hubungi kami untuk konsultasi gratis.
            </p>
            <a href="/contact" className="btn-gold inline-block">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
                <h3 className="font-playfair font-bold text-xl">{selectedImage.title}</h3>
                <p className="text-sm capitalize">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Gallery;
