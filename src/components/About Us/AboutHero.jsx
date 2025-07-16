import { motion } from "framer-motion";
import Img from "../../assets/Homehero2.webp";

const AboutHero = () => {
  return (
    <motion.section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Img})`,
      }}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-20 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md mb-4">
          Discover the Heart of Hospitality
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Welcome to Hotel Aashirwad, where elegance, tradition, and
          world-class service meet in the beauty of Pokhara.
        </p>
        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4 rounded" />
      </motion.div>
    </motion.section>
  );
};

export default AboutHero;
