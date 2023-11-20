import svgSprite from '../assets/sprite.svg';
export default function Card_3() {
    return(
        <div className="one_card">
        <div className="card_header_wrapper">
            <img className="user_photo" src="./img/girl_photo_2.webp"/>
            <div className="card_head_text_wrapper">
                <h6 className="comment_header">“Exceeded all expectations”</h6>
                <div className="insta_nick">
                    <svg className="comment_insta">
                    <use xlinkHref={`${svgSprite}#comment_insta`} />
                    </svg>
                    <span className="insta_nick_text">ririji_fan</span>
                </div>
            </div>
        </div>
        <p className="card_main_text">The adventure tour I booked through this agency exceeded all expectations.
            The thrill of the Amazon Rainforest was matched by the seamless organization of activities. The
            guides were knowledgeable, and the overall experience left me with memories I'll cherish
            forever.
        </p>
        <button className="see_all" type="button">See All</button>
    </div>
    )
}