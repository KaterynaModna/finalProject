import svgSprite from '../assets/sprite.svg';
export default function NaviHeader(){
    return(
        <div class="navi_wrapper">
        <div id="toggle">
            <button class="indicator"></button>
        </div>
        <a href="#">
        <svg className="logo">
            <use xlinkHref="{${svgSprite}#logo}" />
                  </svg>
        </a>
        <div class="icon_wrapper">
            <a href="#">
            <svg className="youtube">
            <use xlinkHref="{${svgSprite}#youtube}" />
                  </svg>
            </a>
            <a href="#">
            <svg className="icon">
            <use xlinkHref="{${svgSprite}#inst}" />
                  </svg>
            </a>
            <a href="#">
            <svg className="icon">
            <use xlinkHref="{${svgSprite}#tg}" />
                  </svg>
            </a>
        </div>
    </div>
    )
}