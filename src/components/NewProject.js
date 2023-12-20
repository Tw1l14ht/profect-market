import React from "react";

function NewProject({handleCreateProjClick}) {
    return (
        <div className="projects">
            <div className="projects__links">
                <a href="" className="projects_link-proj">Мои проекты</a>
                <a href="" className="projects_link-req">Заявки</a>
            </div>
            <button type="button" onClick={handleCreateProjClick} className="projects__button">Создать проект</button>
        </div>
    );
}

export default NewProject;