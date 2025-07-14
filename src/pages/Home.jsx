import Navbar from "../components/Navbar";
import HomeHero from "../components/Home/HomeHero";
import AboutUs from "../components/Home/AboutUs";
import Accommodation from "../components/Home/Accomodation";


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <HomeHero />
      <AboutUs/>
      <Accommodation />
    </div>
  );
};

export default Home;
