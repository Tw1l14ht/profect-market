import React from "react";
import headLogo from "../image/logo.svg";

function Header(){
    return(
        <header className="header">
            <img className="header__logo" src={headLogo} />
            <nav className="header__nav">
                <p className="header__link">Главная</p>
                <p className="header__link">Проекты</p>
                <p className="header__link">Аккаунт</p>
            </nav>
        </header>
    );
}

export default Header;