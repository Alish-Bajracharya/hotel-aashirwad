import { motion } from "framer-motion";
import { FaSpa, FaUserTie, FaUtensils, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: <FaSpa className="text-3xl text-[#F59E0B]" />,
    title: "Wellness & Spa",
    description: "Relax with our premium spa & wellness treatments by certified professionals.",
  },
  {
    icon: <FaUserTie className="text-3xl text-[#F59E0B]" />,
    title: "Exceptional Staff",
    description: "Friendly, multilingual staff available 24/7 to assist with any needs.",
  },
  {
    icon: <FaUtensils className="text-3xl text-[#F59E0B]" />,
    title: "Gourmet Dining",
    description: "Dine with a view, authentic local flavors and international delights.",
  },
  {
    icon: <FaHeart className="text-3xl text-[#F59E0B]" />,
    title: "Heartfelt Hospitality",
    description: "We don’t just host, we care. Experience the warmth of true Nepali service.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#d1dce7] py-24 px-4 md:px-10 overflow-hidden">

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#1e2a54] uppercase tracking-wide">
          Why Choose Us
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Discover why travelers around the world trust Hotel Aashirwad for comfort, care, and class.
        </p>
        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4 rounded"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#1e2a54] mb-2 group-hover:text-[#F59E0B] transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;
