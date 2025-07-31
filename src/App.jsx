import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
