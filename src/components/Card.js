import React from "react";
import cardLogo from "../image/cardlogo.svg";
import like from "../image/like.svg";
import theme from "../image/theme.svg";
import check from "../image/check.svg";
import errImg from "../image/errImg.svg";
import { Link } from "react-router-dom";

function Card(props) {

    let cardLikeClassName = 'card__like';

    function handleLikeClick(){
        cardLikeClassName = 'card__like_active';
    }

    return (
        <div className="card">
            <div className="card__head">
                <div className="card__text">
                    <p className="card__name">{props.name}</p>
                    <p className="card__author">{props.author}</p>
                </div>
                <div className="card__imgs">
                    <button className={cardLikeClassName} onClick={handleLikeClick} type="button"></button>
                </div>
            </div>
            <div className="card__content">
                <div className="card__theme">
                <Link  key={props._id} className="card__open-link" to={`${props._id}`}>
                    <img className="card__theme-logo" src={props.theme} alt="" />
                </Link>
                    <button type="button" className="card__join">Присоединиться</button>
                </div>
                <div className="card__description">
                    <p className="card__describe">{props.description}</p>
                    <div className="card__profs">
                        <div className="card__prof-descrb">
                            <img className="card__profCheck" src={check} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>
                        <div className="card__prof-descrb">
                            <img className="card__profCheck" src={check} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>
                        <div className="card__prof-descrb">
                            <img className="card__profCheck" src={check} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>
                        <div className="card__prof-descrb">
                            <img className="card__profCheck" src={check} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>
                        <div className="card__prof-descrb">
                            <img className="card__profCheck" src={check} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>
                        <div className="card__prof-descrb">
                            <img className="card__profCheck" src={check} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>
                        <div className="card__prof-descrb">
                            <img className="card__profCheck" src={check} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>

                        <div className="card__prof-descrb card__prof-descrb_req">
                            <img className="card__profCheck" src={errImg} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>
                        <div className="card__prof-descrb card__prof-descrb_req">
                            <img className="card__profCheck" src={errImg} alt=""></img>
                            <p className="card__prof-name">Title</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;