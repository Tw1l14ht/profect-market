import React from "react";
import theme from "../image/theme.svg";
function OpenCard() {
    return(
        <div className="">
            <p className="card__name">Мобильное приложения “Лекция” для поиска лекций</p>
            <img className="card__theme-logo" src={theme} alt="" />
        </div>
    );
}

export default OpenCard;