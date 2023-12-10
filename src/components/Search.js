import React from "react";

function Search() {
    return (
    <>
      <form className="search" action="" method="get">
          <input className="search__inp" name="s" placeholder="Искать здесь..." type="search"></input>
          <button className="search__btn" type="submit">Поиск</button>
      </form>
    </>
    );
}

export default Search;