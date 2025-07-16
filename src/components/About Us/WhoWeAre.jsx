import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {  FaHotel, FaMountain } from "react-icons/fa";

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhoWeAre = () => {
  const badges = [
    { icon: <FaHotel />, label: "Family-Owned Since 2010" },
    { icon: <FaMountain />, label: "View of the Himalayas" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="py-28 px-6 md:px-16 bg-gradient-to-br from-[#ffffff] to-[#cfe4ff] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          ref={ref}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1e2a54] mb-4 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Who We Are
          </motion.h2>
          <div className="w-24 h-1 bg-[#F59E0B] mb-6 rounded" />

          <motion.p
            className="text-gray-700 text-lg text-justify leading-relaxed mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hotel Aashirwad is more than a stay, it's an experience of timeless elegance nestled in the heart of Pokhara.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg text-justify leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From serene lakeside mornings to curated luxury, we are proud to offer a blend of tradition, comfort, and unforgettable mountain hospitality.
          </motion.p>

          {/* Icon Badges */}
          <div className="flex gap-4 flex-wrap mt-6">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={badgeVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-white/60 backdrop-blur-md shadow-md px-4 py-2 rounded-full flex items-center gap-2 text-sm text-[#1e2a54] font-medium border border-[#d6e4f3]"
              >
                <span className="text-[#F59E0B]">{badge.icon}</span>
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Layered Image Section */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrB99quQFh627C2_mSmdig3TJWSkAD4B046xXFT7gCz-zF1PoD6ZB_lHqpGHUuM5rMAJSpqBHU8_m82FWFxjz6UV9sERwcLbFcWEHQtNlt2A-ruvBrl2QHjQUN3n9w3UEkYJs0V=s1360-w1360-h1020-rw"
            alt="Hotel View"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
