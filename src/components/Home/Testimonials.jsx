import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Dipson Pokhrel",
    role: "Travel Blogger",
    feedback:
      "Absolutely loved my stay at Hotel Aashirwad! The staff were incredibly kind and the view of Pokhara was breathtaking.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5635AQEoUqzFBRn5bA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1729166813361?e=1753182000&v=beta&t=NFl_YSiZufoVl_5xOgZFArDg75diH4HGgR1aGq1fazY",
    rating: 5,
  },
  {
    name: "Alish Bajracharya",
    role: "Frontend Developer",
    feedback:
      "The rooms were clean and elegant, food was delicious, and their 24/7 service exceeded expectations!",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQGJBOiMBQHzSg/profile-displayphoto-shrink_800_800/B56ZdEKnRmGQAc-/0/1749195324217?e=1758153600&v=beta&t=nNct8qUQvWG4a4Zpq8GzSQABSns_Sv6ZhanvfR91fyY",
    rating: 5,
  },
  {
    name: "Luja Maharjan",
    role: "Businessman",
    feedback:
      "Perfect blend of comfort and professionalism. The concierge made my business trip totally hassle-free.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQHcQz1Jx1kAbw/profile-displayphoto-crop_800_800/B4EZd.nhYhGwAM-/0/1750175980669?e=1758153600&v=beta&t=OUNIVMm5jpKO5spqOwDREg7rEJbmypu8hhR5ar8RaVw",
    rating: 4,
  },
  {
    name: "Angel Gurung",
    role: "Foodie Traveler",
    feedback:
      "The rooftop restaurant and the views were just insane. Loved the Nepali thali and their special drinks!",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    rating: 5,
  },
  {
    name: "Sarin Shakya",
    role: "Photographer",
    feedback:
      "Clean rooms, peaceful location, and warm hospitality — my photography tour went smooth thanks to the team!",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 4,
  },
  {
    name: "Anne Thapa",
    role: "Digital Nomad",
    feedback:
      "Super fast Wi-Fi, great coffee, and a cozy room — made my remote work so productive!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f9fafb] py-20 relative">
      <motion.div
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#1e2a54] uppercase tracking-wide">
          Voice of Satisfaction
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Hear what our happy guests say about their unforgettable experiences with us.
        </p>
        <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4 rounded"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <FaQuoteLeft className="text-[#F59E0B] text-2xl opacity-20 mb-4" />
                <p className="text-gray-700 italic leading-relaxed text-justify flex-grow">
                  “{item.feedback}”
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-[#1e2a54] object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#1e2a54]">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                    <div className="flex mt-1 text-[#F59E0B]">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="testimonial-prev absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white border shadow-md p-2 rounded-full cursor-pointer hover:scale-110 transition">
          <FaChevronLeft className="text-[#1e2a54]" />
        </div>
        <div className="testimonial-next absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white border shadow-md p-2 rounded-full cursor-pointer hover:scale-110 transition">
          <FaChevronRight className="text-[#1e2a54]" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
