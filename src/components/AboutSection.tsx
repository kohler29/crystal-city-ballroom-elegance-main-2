import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="py-20 bg-marble-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crystal Ballroom Season City
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              Crystal Ballroom Season City adalah venue mewah dan elegan yang terletak di Jakarta Barat.
              Kami menawarkan pengalaman tak terlupakan untuk setiap acara spesial Anda, dengan perhatian
              khusus pada detail dan layanan berkualitas tinggi.
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              Dengan arsitektur menakjubkan, pencahayaan mewah, dan dekorasi elegan, Crystal Ballroom
              menyediakan latar belakang sempurna untuk merayakan momen penting dalam hidup Anda.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                to="/about" 
                className="text-gold font-semibold hover:underline inline-flex items-center group"
              >
                Pelajari Lebih Lanjut
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &rarr;
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            variants={containerVariants}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/weeding.jpg", alt: "Crystal Ballroom Interior" },
                { src: "/hero.jpg", alt: "Wedding Setup" },
                { src: "/Table.jpg", alt: "Table Setting" },
                { src: "/venue.jpg", alt: "Venue Details" }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
