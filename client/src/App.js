// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
 return(
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  </BrowserRouter>
 );
}

export default App;
