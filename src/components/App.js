import Header from "./Header";
import Search from "./Search";
import Cards from "./Cards";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import React from 'react';
import NewProject from "./NewProject";
import CreateProject from "./CreateProject";

function App() {
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
            <NewProject />
            <Cards />
          </>
        } />

<Route path="/projects/newProject" element={
          <>
          <CreateProject/>
          </>
         }
         />

      </Routes>
    </div>
  );
}

export default App;
