import { motion } from "framer-motion";
import missionImage from "../../assets/Homehero2.webp"; 

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MissionVision = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-24 overflow-hidden">
      {/* Glowing animated gradient orb */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F59E0B] opacity-10 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#1e2a54] opacity-10 rounded-full blur-3xl z-0 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Left Image */}
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-xl group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <img
              src={missionImage}
              alt="Hotel Mission"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-500" />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div>
              <h2 className="text-4xl font-bold text-[#1e2a54] uppercase tracking-wide">
                Our Mission
              </h2>
              <p className="text-gray-600 text-justify leading-relaxed text-lg mt-3">
                To provide a truly unforgettable stay by combining authentic Nepali hospitality with world-class luxury. We aim to create moments that guests will cherish forever, from their morning coffee to peaceful nights under Pokhara’s starry skies.
              </p>
            </div>

            <div className="border-l-4 border-[#F59E0B] pl-6">
              <h3 className="text-3xl font-semibold text-[#1e2a54] mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-justify text-base leading-relaxed">
                To become Nepal’s most admired hotel destination, known not just for luxury but for heartwarming service, sustainability, and unforgettable cultural immersion.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
