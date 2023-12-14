import React from "react";
import headLogo from "../image/logo.svg";
import { Routes, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headLogo} />
            <nav className="header__nav">
                <Link to="/" className="header__link">Главная</Link>
                <Link to="/projects" className="header__link">Проекты</Link>
                <Link to="/acc" className="header__link">Аккаунт</Link>
            </nav>
        </header>
    );
}

export default Header;