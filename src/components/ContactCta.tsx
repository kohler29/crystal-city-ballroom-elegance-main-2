
import { Link } from "react-router-dom";
import { PhoneCall, Calendar, Map } from "lucide-react";

const ContactCta = () => {
  return (
    <section className="py-20 bg-marble-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Book Your Event</h2>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
            Jadwalkan konsultasi dengan tim event specialist kami untuk mendiskusikan kebutuhan acara Anda
            dan melihat ketersediaan tanggal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gold-light">
                  <PhoneCall className="h-6 w-6 text-gold" />
                </div>
              </div>
              <h3 className="font-playfair font-bold text-xl mb-2">Call Us</h3>
              <p className="text-gray-600">+62 (21) 5436 7890</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gold-light">
                  <Map className="h-6 w-6 text-gold" />
                </div>
              </div>
              <h3 className="font-playfair font-bold text-xl mb-2">Visit Us</h3>
              <p className="text-gray-600">Season City Mall, Jakarta Barat</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gold-light">
                  <Calendar className="h-6 w-6 text-gold" />
                </div>
              </div>
              <h3 className="font-playfair font-bold text-xl mb-2">Opening Hours</h3>
              <p className="text-gray-600">Mon-Sun: 9am - 8pm</p>
            </div>
          </div>

          <Link to="/contact" className="btn-gold inline-block">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
