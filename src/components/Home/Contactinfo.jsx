import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt className="text-2xl text-[#F59E0B]" />,
    title: "Our Address",
    description: "Lakeside, Pokhara 33700, Nepal",
  },
  {
    icon: <FaPhoneAlt className="text-2xl text-[#F59E0B]" />,
    title: "Phone Number",
    description: (
      <div className="flex flex-col">
        <a href="tel:+9779800000000" className="hover:text-[#1e2a54] transition-all">
          +977 9800000000
        </a>
        <a href="tel:+977061000000" className="hover:text-[#1e2a54] transition-all">
          +977 061-000000
        </a>
      </div>
    ),
  },
  {
    icon: <FaEnvelope className="text-2xl text-[#F59E0B]" />,
    title: "Email Us",
    description: (
      <a href="mailto:info@hotelaashirwad.com" className="hover:text-[#1e2a54] transition-all">
        info@hotelaashirwad.com
      </a>
    ),
  },
  {
    icon: <FaClock className="text-2xl text-[#F59E0B]" />,
    title: "Opening Hours",
    description: "Open 24/7 (Including Holidays)",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white px-4 md:px-10">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#1e2a54] uppercase">Contact Information</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Feel free to reach out to us anytime — we're happy to help!
        </p>
        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4 rounded"></div>
      </motion.div>

      {/* Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {contactDetails.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#f9fafb] rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h4 className="text-lg font-semibold text-[#1e2a54] mb-1">{item.title}</h4>
            <div className="text-sm text-gray-600">{item.description}</div>
          </motion.div>
        ))}
      </div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8716.308555362537!2d83.958955!3d28.212722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595e339626bc3%3A0xe82e156a04956623!2sHotel%20Aashirwad!5e1!3m2!1sen!2snp!4v1752581318273!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Top Hotel Aashirwad Map"
          className="w-full"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
