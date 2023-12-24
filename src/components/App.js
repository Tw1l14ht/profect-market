import Header from "./Header";
import Search from "./Search";
import Cards from "./Cards";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import NewProject from "./NewProject";
import CreateProject from "./CreateProject";
import OpenCard from "./OpenCard";
import { CurrentCardsContext } from "../context/ArrayOfCards";
import { initialCards } from "../utils/constants";

function App() {
  const [newProject, setNewProject] = useState(false);

  const handleCreateProjClick = () => {
    setNewProject = true;
  }

  const handleLikeClick = () => {
    setNewProject = true;
  }

  return (
    <CurrentCardsContext.Provider value={initialCards}>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Search />
              <Cards />
            </>
          } />

          <Route exact path="/:_id" element={<OpenCard cards={initialCards} />}
          />

          <Route path="/projects" element={
            <>
              <NewProject onClickNewProf={handleCreateProjClick} />
              <Cards />
            </>
          } />

          <Route path="/projects/newProject" element={
            <>
              <CreateProject />
            </>
          }
          />

        </Routes>
      </div>
    </CurrentCardsContext.Provider>
  );
}

export default App;
