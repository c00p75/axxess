import "./style.scss";
import HeroSection from "./hero section";
import Solution from "./solution";
import OurServices from "./our services";
import Testimonials from "./testimonials";
import ShortCourses from "./short courses";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Solution />
      <OurServices />
      <ShortCourses />
      <Testimonials />
    </>
  );
};

export default HomePage;
