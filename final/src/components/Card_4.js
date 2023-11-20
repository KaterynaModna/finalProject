export default function Card_4() {
    return(
        <div className="one_card">
        <div className="card_header_wrapper">
            <img className="user_photo" src="./img/guy_photo_2.webp"/>
            <div className="card_head_text_wrapper">
                <h6 className="comment_header">“Super tour support!”</h6>
                <div className="insta_nick">
                    <svg className="comment_insta">
                        <use xlink:href="./assets/sprite.svg#comment_insta" />
                    </svg>
                    <span className="insta_nick_text">tomas_shelbi</span>
                </div>
            </div>
        </div>
        <p className="card_main_text">As a solo traveler, I felt completely at ease with the support of this
            agency. The cultural immersion tour I chose provided a perfect balance of group activities and
            personal exploration. The guides were friendly, and I made lifelong friends during the journey.
        </p>
        <button className="see_all" type="button">See All</button>
    </div>
    )
}