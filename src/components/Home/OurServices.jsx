import { motion } from "framer-motion";
import {
  FaConciergeBell,
  FaTshirt,
  FaParking,
  FaUtensils,
  FaCocktail,
  FaWifi,
  FaLeaf,
  FaShower,
  FaInfoCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaConciergeBell className="text-4xl text-[#1e2a54]" />,
    title: "24/7 Service",
    description: "Round-the-clock front desk and room service to serve your every need.",
  },
  {
    icon: <FaTshirt className="text-4xl text-[#1e2a54]" />,
    title: "Laundry",
    description: "Quick and professional laundry services during your stay.",
  },
  {
    icon: <FaParking className="text-4xl text-[#1e2a54]" />,
    title: "Parking",
    description: "Spacious and secure on-site parking for all guests.",
  },
  {
    icon: <FaUtensils className="text-4xl text-[#1e2a54]" />,
    title: "Restaurant",
    description: "Enjoy a variety of local and international dishes.",
  },
  {
    icon: <FaCocktail className="text-4xl text-[#1e2a54]" />,
    title: "Bars",
    description: "Relax at our elegant bars with a wide range of drinks.",
  },
  {
    icon: <FaShower className="text-4xl text-[#1e2a54]" />,
    title: "Hot & Cold Water",
    description: "24-hour hot and cold water facility for your comfort.",
  },
  {
    icon: <FaLeaf className="text-4xl text-[#1e2a54]" />,
    title: "Greenery",
    description: "A peaceful environment surrounded by beautiful natural greenery.",
  },
  {
    icon: <FaWifi className="text-4xl text-[#1e2a54]" />,
    title: "Free WiFi",
    description: "Stay connected with high-speed internet throughout the property.",
  },
  {
    icon: <FaInfoCircle className="text-4xl text-[#1e2a54]" />,
    title: "Concierge",
    description: "Personalized concierge service for all your travel and stay needs.",
  },
];

const OurServices = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-white to-[#f2f7fd]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#1e2a54] tracking-wide uppercase">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Premium hospitality tailored for your comfort, convenience, and relaxation.
        </p>
        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4 rounded"></div>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-5 flex justify-center items-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-[#1e2a54] mb-2 group-hover:text-[#F59E0B] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
