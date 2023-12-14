import React from "react";
import cardLogo from "../image/cardlogo.svg";
import like from "../image/like.svg";
import theme from "../image/theme.svg";
import check from "../image/check.svg";
import errImg from "../image/errImg.svg";

function Card() {
    return (
        <div className="card">
            <div className="card__head">
                <div className="card__text">
                    <p className="card__name">Мобильное приложения “Лекция” для поиска лекций</p>
                    <p className="card__author">Орлов А. В.</p>
                </div>
                <div className="card__imgs">
                    <img className="card__like" src={like} alt=""></img>
                </div>
            </div>
            <div className="card__content">
                <div className="card__theme">
                    <img className="card__theme-logo" src={theme} alt="" />
                    <button type="button" className="card__join">Присоединиться</button>
                </div>
                <div className="card__description">
                    <p className="card__describe">
                        Мобильное приложение, призванное помочь студентам в учебе.
                        Здесь вы можете опубликовать текст, аудиозапись, видеозаписиь
                        лекции. Множество фильтров по университету, направлению, курсу,
                        предмету, преподавателю, теме. Мобильное приложение, призванное
                        помочь студентам в учебе. Здесь вы можете опубликовать текст, аудиозапись,
                        видеозаписиь лекции. Множество фильтров по университету, направлению, курсу,
                        предмету, преподавателю, теме. Мобильное приложение, призванное помочь студентам
                        в учебе. Здесь вы можете опубликовать текст...
                    </p>
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