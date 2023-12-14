import React from "react";

function NewProject() {
    return (
        <div className="projects">
            <div className="projects__links">
                <a href="" className="projects_link-proj">Мои проекты</a>
                <a href="" className="projects_link-req">Заявки</a>
            </div>
            <button type="button" className="projects__button">Создать проект</button>
        </div>
    );
}

export default NewProject;