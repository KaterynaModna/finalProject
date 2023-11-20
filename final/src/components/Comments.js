import Slider from "react-slick";

import Card_1 from "./Card_1";
import Card_2 from "./Card_2";
import Card_3 from "./Card_3";
import Card_4 from "./Card_4";
import Card_5 from "./Card_5";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrowImage = "url('../assets/left_arrow')";
const PrevArrowImage = "url('../assets/right_arrow')";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
            ...style,
            display: "block",
            backgroundImage: NextArrowImage,
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center", 
          }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
            ...style,
            display: "block",
            backgroundImage: PrevArrowImage,
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center", 
          }}
        onClick={onClick}
      />
    );
  }


export default function Ccomments(){

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

    return(
        <section className="card_section">
            <div class="cards">
        <Slider {...settings}>
            <div>
        <Card_1 />
        </div>
        <div>
        <Card_2 />
        </div>
        <div>
        <Card_3 />
        </div>
        <div>
        <Card_4 />
        </div>
        <div>
        <Card_5 />
        </div>
        </Slider>
        </div>
    </section>
    )
}