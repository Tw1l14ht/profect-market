import React from "react";
import {  Routes, Route, useNavigate, Navigate } from "react-router-dom";

function NewProject({handleCreateProjClick}) {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/projects/newProject", { replace: true });
    }

    return (
        <div className="projects">
            <div className="projects__links">
                <a href="" className="projects_link-proj">Мои проекты</a>
                <a href="" className="projects_link-req">Заявки</a>
                <a href="" className="projects_link-like">Избранное</a>
            </div>
            <button type="button" onClick={handleClick} className="projects__button">Создать проект</button>
        </div>
    );
}

export default NewProject;