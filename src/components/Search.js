import React from "react";
import searchImg from "../image/Search.svg"

function Search() {
    return (
    <>
      <form className="search" action="" method="get">
        <div className="search__stack">
          <input className="search__inp" name="s" placeholder="Поиск по ключевым словам" type="search"></input>
          <img className="search__image" src={searchImg} alt=""></img>
        </div>
          <button className="search__btn" type="submit">Искать!</button>
      </form>
    </>
    );
}

export default Search;