import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ramesh Karki",
    role: "General Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sujata Thapa",
    role: "Head Chef",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sagar Sharma",
    role: "Front Desk Supervisor",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Anjali Kunwar",
    role: "Housekeeping Lead",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="relative bg-white py-24 px-6 sm:px-12 overflow-hidden">
      {/* Light blur gradients */}
      <div className="absolute -top-20 left-0 w-60 h-60 bg-[#1e2a54] opacity-10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-16 right-0 w-72 h-72 bg-[#F59E0B] opacity-10 blur-3xl animate-ping" />

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#1e2a54] uppercase tracking-wide">
          Meet Our Team
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Passionate professionals dedicated to making your stay exceptional.
        </p>
        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4 rounded" />
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6 md:px-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-[#f9fafb] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 text-center">
              <h4 className="text-lg font-bold text-[#1e2a54] group-hover:text-[#F59E0B] transition-colors duration-300">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
