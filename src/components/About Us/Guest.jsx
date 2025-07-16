import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Alish Bajracharya",
    feedback: "Impressed by their service, hospitality, and stunning views. Truly world-class!",
    rating: 5,
  },
  {
    name: "Dipson Pokhrel",
    feedback: "Felt like royalty. I recommend Hotel Aashirwad to anyone visiting Pokhara.",
    rating: 5,
  },
];

const Guest = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f9fafb] to-blue-200 px-4 md:px-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#1e2a54] uppercase">Guest Testimonials</h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Here's what our happy guests say. See why they choose us again and again.
        </p>
        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4 rounded" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="italic text-gray-700">“{review.feedback}”</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-[#1e2a54]">{review.name}</h4>
                <div className="flex text-[#F59E0B]">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/reviews"
          className="inline-block text-sm font-semibold px-6 py-3 border border-[#1e2a54] text-[#1e2a54] hover:bg-[#1e2a54] hover:text-white transition rounded-full"
        >
          Read All Reviews →
        </Link>
      </div>
    </section>
  );
};

export default Guest;
