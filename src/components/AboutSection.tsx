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
    <section className="py-20 bg-marble-light" id="about" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.article className="md:w-1/2" variants={itemVariants}>
            <motion.h2 
              id="about-heading"
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
                aria-label="Learn more about Crystal Ballroom Season City venue details"
              >
                Pelajari Lebih Lanjut
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  aria-hidden="true"
                >
                  &rarr;
                </motion.span>
              </Link>
            </motion.div>
          </motion.article>
          <motion.aside 
            className="md:w-1/2"
            variants={containerVariants}
            aria-label="Crystal Ballroom venue gallery"
          >
            <div className="grid grid-cols-2 gap-4" role="img" aria-label="Venue photo gallery">
              {[
                { src: "/weeding.jpg", alt: "Crystal Ballroom elegant wedding ceremony setup with beautiful lighting and floral decorations", title: "Wedding Ceremony Setup" },
                { src: "/hero.jpg", alt: "Crystal Ballroom main hall interior showing spacious venue with crystal chandeliers", title: "Main Ballroom Interior" },
                { src: "/Table.jpg", alt: "Elegant table setting with fine dining arrangement for wedding reception at Crystal Ballroom", title: "Wedding Reception Table Setting" },
                { src: "/venue.jpg", alt: "Crystal Ballroom venue details showcasing luxurious interior design and event space", title: "Venue Interior Details" }
              ].map((image, index) => (
                <motion.figure
                  key={index}
                  className="overflow-hidden rounded-lg"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    width={400}
                    height={256}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.figure>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
