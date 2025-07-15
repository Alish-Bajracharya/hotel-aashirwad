import Navbar from "../components/Navbar";
import HomeHero from "../components/Home/HomeHero";
import AboutUs from "../components/Home/AboutUs";
import Accommodation from "../components/Home/Accomodation";
import OurServices from "../components/Home/OurServices";
import Testimonials from "../components/Home/Testimonials";
import ContactInfo from "../components/Home/Contactinfo";


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <HomeHero />
      <AboutUs/>
      <Accommodation />
      <OurServices />
      <Testimonials/>
      <ContactInfo/>
    </div>
  );
};

export default Home;
