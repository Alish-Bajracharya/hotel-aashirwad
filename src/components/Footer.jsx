import { FaFacebookF, FaInstagram, FaWhatsapp, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-[#1e2a54] text-white py-16 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">Hotel Aashirwad</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience luxury, comfort, and serenity in the heart of Pokhara. Your memorable stay starts here.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="hover:text-[#F59E0B] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#F59E0B] transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>24/7 Room Service</li>
              <li>Restaurant & Bar</li>
              <li>Laundry</li>
              <li>Free Wi-Fi</li>
              <li>Parking</li>
              <li>Concierge</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-300">Lakeside, Pokhara 33700</p>
            <p className="text-sm text-gray-300 mt-2">
              <a href="tel:+9779800000000" className="hover:text-[#F59E0B] transition">+977 9800000000</a>
            </p>
            <p className="text-sm text-gray-300">
              <a href="mailto:info@hotelaashirwad.com" className="hover:text-[#F59E0B] transition">info@hotelaashirwad.com</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Hotel Aashirwad. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Website by{" "}
            <a
              href="https://www.digisoftdevelopers.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F59E0B] hover:underline"
            >
              Digisoft Developers Pvt. Ltd.
            </a>
          </p>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 z-50 bg-[#F59E0B] hover:bg-[#d18a00] text-white p-3 rounded-full shadow-lg transition"
        >
          <FaChevronUp />
        </button>
      )}

      {/* WhatsApp Chat Floating Icon */}
      <a
        href="https://wa.me/9779800000000?text=Hello%20Top%20Hotel%20Aashirwad!%20I%20have%20a%20question."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all animate-bounce"
      >
        <FaWhatsapp className="text-xl" />
      </a>
    </>
  );
};

export default Footer;
