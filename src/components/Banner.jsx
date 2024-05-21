import Slider from "react-slick";
import "../../public/css/slider.css";
import techno from "../assets/techno house.png";
import technooo from "../assets/technooo.png";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        <div className="one"></div>
        <div className="tow"></div>
        <div className="three"></div>
        <div className="four"></div>
      </Slider>
    </div>
  );
};

export default Banner;
