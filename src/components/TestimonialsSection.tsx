
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anita & Budi",
    date: "June 2023",
    event: "Wedding",
    quote: "Acara pernikahan kami sangat sempurna berkat Crystal Ballroom. Staf yang profesional dan dekorasinya sangat indah!",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Linda",
    date: "March 2023",
    event: "50th Birthday",
    quote: "Suasana yang elegan dan layanan yang luar biasa. Pesta ulang tahun ke-50 saya menjadi sangat berkesan!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  },
  {
    id: 3,
    name: "PT Global Solutions",
    date: "December 2022",
    event: "Annual Gala",
    quote: "Crystal Ballroom menjadi pilihan tepat untuk acara gala tahunan kami. Tim manajemen sangat kooperatif dan membantu.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-20 bg-gradient-to-r from-gold-light via-white to-gold-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Testimonials</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Dengarkan pengalaman dari klien-klien kami yang telah mempercayakan acara spesial mereka pada Crystal Ballroom.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="text-gold text-5xl font-serif mb-4">"</div>
                <p className="italic text-gray-700 mb-6 text-lg">
                  {testimonials[currentIndex].quote}
                </p>
                <div>
                  <h4 className="font-playfair font-bold text-xl text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].event} - {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gold hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gold hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 transition-colors ${index === currentIndex ? 'bg-gold' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
