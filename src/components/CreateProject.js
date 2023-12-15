import React from "react";
import uploadLogo from "../image/uploadLogo.svg";

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
                    <img className="upload__photo-logo" src={uploadLogo}/>
                </label>
                <input id="photoInput" type="file" className="new-proj__photo-input" placeholder="" />
                <h2 className="new-proj__title new-proj__title-about">О проекте</h2>
                <textarea className="new-proj__about-input" placeholder="Введите описание"></textarea>
                <h2 className="new-proj__title new-proj__title-check">Занятые роли</h2>
                <h2 className="new-proj__title new-proj__title-req">Вакантные роли</h2>
            </div>
        </div>
    );
}

export default CreateProject;