import Header from "./Header";
import Search from "./Search";
import Cards from "./Cards";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import NewProject from "./NewProject";
import CreateProject from "./CreateProject";
import OpenCard from "./OpenCard";

function App() {
  const [newProject, setNewProject] = useState(false);

  const handleCreateProjClick = () => {
    setNewProject = true;
  }

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Search />
            <Cards />
          </>
        } />

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
        <Route path="/card" element={
          <>
            <OpenCard />
          </>
        }
        />

      </Routes>
    </div>
  );
}

export default App;
