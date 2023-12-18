import React from "react";
import uploadLogo from "../image/uploadLogo.svg";
import check from "../image/check.svg";
import errImg from "../image/errImg.svg";
import deleteProf from "../image/deleteProf.svg";
import plusProfs from "../image/plusProfs.svg";

function CreateProject() {
    return (
        <div className="new-proj">
            <h1 className="new-proj__head">Создание проекта</h1>
            <div className="new-proj__content">
                <h2 className="new-proj__title new-proj__title-proj">Название проекта</h2>
                <input type="text" className="new-proj__title-input" placeholder="Введите название..." />
                <h2 className="new-proj__title new-proj__title-photo">Фото проекта</h2>
                <label for="photoInput" className="upload__photo">
                    <p className="upload__photo-title">Загрузить изображение</p>
                    <img className="upload__photo-logo" src={uploadLogo} />
                </label>
                <input id="photoInput" type="file" className="new-proj__photo-input" placeholder="" />
                <h2 className="new-proj__title new-proj__title-about">О проекте</h2>
                <textarea className="new-proj__about-input" placeholder="Введите описание"></textarea>
                <h2 className="new-proj__title  ">Занятые роли</h2>
                <div className="card__profs">
                    <div className="card__prof-descrb card__prof-descrb_newProj">
                        <img className="card__profCheck" src={check} alt=""></img>
                        <p className="card__prof-name">Title</p>
                        <img src={deleteProf} alt="#" className="card__deleteImg" />
                    </div>
                    <img className="card__plusProfs" src={plusProfs} />
                </div>
                <h2 className="new-proj__title new-proj__title-req">Вакантные роли</h2>
                <div className="card__profs">
                    <div className="card__prof-descrb card__prof-descrb_req card__prof-descrb_newProj">
                        <img className="card__profCheck" src={errImg} alt=""></img>
                        <p className="card__prof-name">Title</p>
                        <img src={deleteProf} alt="#" className="card__deleteImg" />
                    </div>
                    <img className="card__plusProfs" src={plusProfs} />
                </div>
            </div>
        </div>
    );
}



export default CreateProject;