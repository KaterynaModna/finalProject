import svgSprite from '../assets/sprite.svg';
export default function Card_5() {
    return(
        <div className="one_card">
                <div className="card_header_wrapper">
                    <img className="user_photo" src="./img/girl_photo_3.webp"/>
                    <div className="card_head_text_wrapper">
                        <h6 className="comment_header">“Deal with details”</h6>
                        <div className="insta_nick">
                            <svg className="comment_insta">
                            <use xlinkHref={`${svgSprite}#comment_insta`} />
                            </svg>
                            <span className="insta_nick_text">rena_ta</span>
                        </div>
                    </div>
                </div>
                <p className="card_main_text">I opted for the Luxury Desert Retreat in Dubai, and it was pure opulence.
                    From the moment I arrived, every detail was taken care of. The personalized service, exclusive
                    accommodations, and breathtaking experiences made it a truly luxurious escape.
                </p>
                <button className="see_all" type="button">See All</button>
            </div>
    )
}