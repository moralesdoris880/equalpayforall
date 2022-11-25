import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

 return(
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup setUser={setUser}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home user={user} />}/>
      </Routes>
    </div>
  </BrowserRouter>
 );
}

export default App;
