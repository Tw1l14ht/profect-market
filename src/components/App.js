import Header from "./Header";
import Search from "./Search";
import Cards from "./Cards";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import React from 'react';
import NewProject from "./NewProject";

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

      </Routes>
    </div>
  );
}

export default App;
