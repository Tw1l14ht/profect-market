import React from "react";
import Card from "./Card";
import { CurrentCardsContext } from "../context/ArrayOfCards";
import { Link } from 'react-router-dom';

function Cards() {
    const currentCards = React.useContext(CurrentCardsContext);
    return (
        <section className="cards">
            {currentCards.map((card) => (
                <Card {...card} key={card._id} />
            ))}
        </section>
    );
}

export default Cards