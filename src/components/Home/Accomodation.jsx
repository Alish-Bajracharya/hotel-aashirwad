import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import room from "../../assets/suite_room.png";

const rooms = [
  {
    id: 1,
    image: room,
    title: "Twin Room",
    description:
      "Experience comfort in our spacious Twin Room featuring two plush beds, breathtaking views of Pokhara’s lakeside, and modern finishes. Ideal for friends or colleagues traveling together, with cozy lighting to set the perfect ambiance after a day of adventure.",
  },
  {
    id: 2,
    image: room,
    title: "Family Room",
    description:
      "Our Family Room offers a wide and welcoming space complete with a relaxing lounge area, mountain vistas through large windows, and an indoor play corner to keep your little ones entertained. ",
  },
  {
    id: 3,
    image: room,
    title: "Suite Room",
    description:
      "Indulge in our premium Suite Room, designed for both relaxation and productivity. Featuring a private balcony, fully stocked minibar, king-size bed, and a dedicated workspace, it’s perfect for business travelers and luxury seekers alike.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const textFadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.6, duration: 1 } },
};

const Accomodation = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-24">
      {/* Heading */}
      <motion.div
        className="text-center mb-20 px-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm font-semibold text-[#1e2a54] tracking-widest uppercase">
          Experience Luxury
        </h2>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#1e2a54] mt-2 leading-snug relative inline-block cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Signature{" "}
          <span className="text-blue-900 underline decoration-blue-400 decoration-4 underline-offset-8 transition-all duration-300 hover:decoration-blue-900">
            Accommodation
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl mx-auto text-gray-600 text-sm md:text-base"
          variants={textFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Where comfort meets elegance, immerse yourself in rooms designed to impress.
        </motion.p>
      </motion.div>

      {/* Room Cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-20">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } rounded-3xl  duration-1000`}
          >
            {/* Image Section */}
            <motion.div
              className="relative w-full lg:w-1/2 group overflow-hidden rounded-3xl shadow-xl"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-[280px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-40 transition duration-700" />
            </motion.div>

            {/* Content Box */}
            <motion.div
              className="w-full lg:w-1/2 bg-white/90 backdrop-blur-lg border border-blue-100 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Glowing gradient shimmer ring */}
              <div className="absolute -top-5 -right-5 w-36 h-36 bg-gradient-to-tr from-blue-500 to-pink-400 opacity-20 rounded-full blur-3xl animate-pulse" />
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-600 mb-6 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ color: "#1e2a54", scale: 1.03 }}
              >
                {room.title}
              </motion.h3>
              <motion.p
                className="text-sm md:text-base text-gray-600 text-justify leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
              >
                {room.description}
              </motion.p>
              <div className="mt-8 flex flex-wrap gap-5">
                <motion.a
                  href={`/rooms#room-${room.id}`}
                  className="px-6 py-3 bg-blue-600 text-white text-sm rounded-full shadow-md hover:bg-blue-700 transition relative overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">See More</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-30 rounded-full transition duration-300"
                  />
                </motion.a>
                <motion.button
                  onClick={() => navigate(`/rooms#room-${room.id}`)}
                  className="px-6 py-3 border border-gray-300 text-gray-800 text-sm rounded-full hover:bg-gray-100 transition relative overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                >
                  Room Details
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Accomodation;
