import React from "react";
import avatar from "../image/avatar.svg";
import member from "../image/member.svg";
import { useParams } from 'react-router-dom';
import { CurrentCardsContext } from "../context/ArrayOfCards";

function OpenCard() {
    const currentCards = React.useContext(CurrentCardsContext);
    let id = useParams()._id;
    let card = {};
    console.log(id);
    currentCards.forEach((item) => {
        if (item._id == id) {
            card = item;
        }
    });

    return (
        <div className="opencard">
            <p className="card__name opencard__name">{card.name}</p>
            <div className="opencard__info">
                <img className="card__theme-logo opencard__theme" src={card.theme} alt="" />
                <div className="opencard__author-info">
                    <div className="opencard__author">
                        <img src={avatar} className="opencard__avatar" alt="" />
                        <p className="opencard__author-text">
                            Руководитель проекта:<br />
                            {card.author}
                        </p>
                    </div>
                    <button className="card__join opencard__join" type="button">Присоединиться</button>
                </div>

            </div>
            <p className="opencard__describe">Описание проекта</p>
            <p className="opencard__describe-text">{card.description}</p>
            <p className="opencard__members-title">Участники</p>
            <div className="opencard__members">
                <div className="opencard__author opencard__member">
                    <img src={member} className="opencard__avatar" alt="" />
                    <p className="opencard__author-text">
                        Проджект-менеджер:<br />
                        Егоров А.И.
                    </p>
                </div>
                <div className="opencard__author opencard__member">
                    <img src={member} className="opencard__avatar" alt="" />
                    <p className="opencard__author-text">
                        Проджект-менеджер:<br />
                        Егоров А.И.
                    </p>
                </div>
                <div className="opencard__author opencard__member">
                    <img src={member} className="opencard__avatar" alt="" />
                    <p className="opencard__author-text">
                        Проджект-менеджер:<br />
                        Егоров А.И.
                    </p>
                </div>
                <div className="opencard__author opencard__member">
                    <img src={member} className="opencard__avatar" alt="" />
                    <p className="opencard__author-text">
                        Проджект-менеджер:<br />
                        Егоров А.И.
                    </p>
                </div>
            </div>
            <p className="opencard__members-title">Требуются</p>
            <div className="opencard__members">
                <div className="opencard__author opencard__member">
                    <img src="" className="opencard__avatar" alt="" />
                    <p className="opencard__author-text">
                        Дизайнер<br />

                    </p>
                </div>
                <div className="opencard__author opencard__member">
                    <img src="" className="opencard__avatar" alt="" />
                    <p className="opencard__author-text">
                        Дизайнер<br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OpenCard;