
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  event: string;
  rating: number;
  quote: string;
  image: string;
}

const testimonialsList: Testimonial[] = [
  {
    id: 1,
    name: "Anita & Budi",
    date: "June 2023",
    event: "Wedding",
    rating: 5,
    quote: "Acara pernikahan kami sangat sempurna berkat Crystal Ballroom. Staf yang profesional dan dekorasinya sangat indah! Semua tamu kami memuji venue yang elegan dan layanan yang luar biasa.",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Linda",
    date: "March 2023",
    event: "50th Birthday",
    rating: 5,
    quote: "Suasana yang elegan dan layanan yang luar biasa. Pesta ulang tahun ke-50 saya menjadi sangat berkesan! Semua detail diperhatikan dengan baik dan tim sangat membantu dalam perencanaan.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  },
  {
    id: 3,
    name: "PT Global Solutions",
    date: "December 2022",
    event: "Annual Gala",
    rating: 4,
    quote: "Crystal Ballroom menjadi pilihan tepat untuk acara gala tahunan kami. Tim manajemen sangat kooperatif dan membantu. Fasilitas audio visual sangat baik untuk presentasi perusahaan.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 4,
    name: "Dian & Reza",
    date: "September 2022",
    event: "Wedding",
    rating: 5,
    quote: "Kami sangat senang telah memilih Crystal Ballroom untuk pernikahan kami. Ruangan yang megah, makanan lezat, dan pelayanan prima membuat hari spesial kami benar-benar tak terlupakan.",
    image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 5,
    name: "Bank Sentral Indonesia",
    date: "July 2022",
    event: "Corporate Meeting",
    rating: 5,
    quote: "Lokasi yang strategis dan fasilitas profesional membuat meeting tahunan kami berjalan lancar. Staff sangat sigap dan membantu dengan semua kebutuhan teknis kami.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 6,
    name: "Keluarga Sanjaya",
    date: "May 2022",
    event: "Family Reunion",
    rating: 4,
    quote: "Acara reuni keluarga kami berlangsung meriah di Crystal Ballroom. Ruangan yang luas, makanan yang enak, dan suasana yang hangat membuat semua anggota keluarga betah.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"
  },
  {
    id: 7,
    name: "Maya's Sweet 17",
    date: "February 2022",
    event: "Birthday",
    rating: 5,
    quote: "Pesta Sweet 17 saya benar-benar seperti mimpi! Dekorasi yang cantik, lighting yang indah, dan staff yang ramah membuat malam itu jadi momen yang tak terlupakan.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 8,
    name: "PT Tech Innovators",
    date: "November 2021",
    event: "Product Launch",
    rating: 5,
    quote: "Crystal Ballroom memberikan kesan profesional yang sempurna untuk peluncuran produk terbaru kami. Setup audio dan visual sangat bagus, dan lokasi sangat nyaman bagi para tamu.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 9,
    name: "Nina & Ari",
    date: "October 2021",
    event: "Wedding",
    rating: 4,
    quote: "Pernikahan kami berjalan lancar di Crystal Ballroom. Tim event sangat membantu dalam persiapan dan pelaksanaan. Ruangan yang indah menjadi latar belakang sempurna untuk foto-foto kami.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80"
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover mr-4" 
          />
          <div>
            <h3 className="font-playfair font-bold text-xl text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.event} - {testimonial.date}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        
        <p className="text-gray-700 italic">"{testimonial.quote}"</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-20 pt-32 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4">Testimoni</h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
            Lihat apa yang dikatakan klien kami tentang pengalaman mereka di Crystal Ballroom Season City.
            Kami bangga telah menjadi bagian dari momen penting dalam hidup mereka.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonialsList.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="bg-marble-light rounded-lg p-8">
            <h2 className="text-2xl font-playfair font-bold text-center mb-6">Bagikan Pengalaman Anda</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
              Sudah mengadakan acara di Crystal Ballroom? Kami ingin mendengar pengalaman Anda.
              Bagikan testimonial Anda untuk membantu calon klien lain memahami pengalaman di venue kami.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:testimonials@crystalballroom.id" 
                className="btn-gold"
              >
                Kirim Testimonial
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
