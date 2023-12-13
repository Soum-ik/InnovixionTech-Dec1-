import React from "react";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/Error";
function App() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Routes>
        <Route path="/"  element={<HomePage />}/>
        <Route path="/*"  element={<ErrorPage />}/>
        <Route path="/moviepage"  element={<moviePage />}/>
      </Routes>
    </div>
  );
}

export default App;