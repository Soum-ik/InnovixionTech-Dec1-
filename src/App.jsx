import React from "react";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/Error";
import MoviePage from "../src/components/pages/moviePage"
function App() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Routes>
        <Route path="/"  element={<HomePage />}/>
        <Route path="/*"  element={<ErrorPage />}/>
        <Route path="/moviepage"  element={<MoviePage />}/>
      </Routes>
    </div>
  );
}

export default App;