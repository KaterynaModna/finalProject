export default function Card_2() {
    return(
        <div className="one_card">
        <div className="card_header_wrapper">
            <img className="user_photo" src="./img/guy_photo.webp"/>
            <div className="card_head_text_wrapper">
                <h6 className="comment_header">“Great cultural tour in Kyoto!”</h6>
                <div className="insta_nick">
                    <svg className="comment_insta">
                        <use xlink:href="./assets/sprite.svg#comment_insta" />
                    </svg>
                    <span className="insta_nick_text">amir_ragrini</span>
                </div>
            </div>
        </div>
        <p className="card_main_text">The guides were passionate about sharing the history, and the local
            experiences were fantastic. The only improvement could be more flexibility in the schedule.
        </p>
        <button className="see_all" type="button">See All</button>
    </div>
    )
}