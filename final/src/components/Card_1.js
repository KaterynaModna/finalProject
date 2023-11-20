
import svgSprite from '../assets/sprite.svg';
export default function Card_1() {
    return(
<div className="one_card">
<div className="card_header_wrapper">
    <img className="user_photo" src="../assets/girl_photo.webp"/>
    <div className="card_head_text_wrapper">
        <h6 className="comment_header">“Best decision I made”</h6>
        <div className="insta_nick">
            <svg className="comment_insta">
                <use xlinkHref={`${svgSprite}#comment_insta`} />
            </svg>
            <span className="insta_nick_text">olga_33</span>
        </div>
    </div>
</div>
<p className="card_main_text">Choosing this travel agency was the best decision I made for my vacation.
    The
    attention to detail in planning my cultural tour was exceptional. From historic landmarks to
    hidden gems, every moment was unforgettable. I can't wait to book my next adventure with them!
</p>
<button className="see_all" type="button">See All</button>
</div>
    )
}