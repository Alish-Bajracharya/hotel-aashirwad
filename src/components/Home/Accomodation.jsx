import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import room from "../../assets/suite_room.png"
const rooms = [
  { id: 1, image: room, title: "Luxury Room", description: "Elegant interior, king-size bed and scenic balcony." },
  { id: 2, image: room, title: "Family Suite", description: "Spacious room for families, play area and amenities." },
  { id: 3, image: room, title: "Executive Suite", description: "Work and relax with business desk and premium service." },
  { id: 4, image: room, title: "Disney House", description: "Fun, colorful theme room ideal for children and families." },
  { id: 5, image: room, title: "Deluxe View", description: "Incredible mountain view with cozy interiors." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Accomodation = () => {
  const [activeRoom, setActiveRoom] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (id) => {
    setActiveRoom(activeRoom === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-12">
      <div className="text-center mb-14">
        <motion.h2
          className="text-blue-500 text-sm font-semibold tracking-wide uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Take Yourself
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Special <span className="text-red-500">Rooms</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Discover the most exclusive rooms and suites that blend luxury and comfort.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {rooms.map((room) => {
          const isActive = activeRoom === room.id;
          return (
            <motion.div
              key={room.id}
              variants={cardVariants}
              layout
              transition={{ layout: { duration: 0.5, type: "spring" } }}
              className={`rounded-xl overflow-hidden shadow-lg bg-white group relative cursor-pointer transform hover:scale-[1.015] hover:shadow-2xl transition duration-300`}
              onClick={() => handleToggle(room.id)}
            >
              {/* Image Section */}
              <motion.img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />

              {/* Title Overlay */}
              <motion.div
                className="absolute bottom-4 left-4 text-white bg-black/40 px-4 py-2 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 0 : 1 }}
              >
                <h3 className="text-lg font-semibold">{room.title}</h3>
              </motion.div>

              {/* Expanded Section */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="p-6"
                    key="details"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800">{room.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{room.description}</p>
                    <div className="mt-4 flex gap-3">
                      <a
                        href={`/rooms#room-${room.id}`}
                        className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                      >
                        View More
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/rooms#room-${room.id}`);
                        }}
                        className="px-4 py-2 text-sm rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
                      >
                        More Details
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Accomodation;