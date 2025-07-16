import { motion } from "framer-motion";

const points = [
  "We source 70% of ingredients from local farmers and markets.",
  "Plastic-free rooms with refillable glass water bottles.",
  "Solar-powered water heating system across all floors.",
  "Support local schools and eco-tourism programs in Pokhara.",
];

const Sustainability = () => {
  return (
    <section className="bg-white relative py-24 px-6 md:px-16">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#1e2a54] uppercase">Our Sustainability Promise</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We believe in responsible tourism. Here’s how we reduce our impact and give back.
        </p>
        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4 rounded" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        {points.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#f0f7ff] p-6 rounded-xl border-l-4 border-[#1e2a54] text-gray-700 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-base leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional animation blob */}
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#1e2a54] rounded-full blur-3xl opacity-10 animate-pulse" />
    </section>
  );
};

export default Sustainability;
