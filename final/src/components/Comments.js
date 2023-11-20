import Card_1 from "./Card_1";
import Card_2 from "./Card_2";
import Card_3 from "./Card_3";
import Card_4 from "./Card_4";
import Card_5 from "./Card_5";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Comments(){
    return(
        <section className="card_section">
        <div className="container">
        <div className="cards">
        <Card_1 />
        <Card_2 />
        <Card_3 />
        <Card_4 />
        <Card_5 />
        </div>
    </div>
    </section>
    )
}