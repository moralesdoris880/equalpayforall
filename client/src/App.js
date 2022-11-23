import { useState, useEffect } from "react";

function App() {
 return(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  </BrowserRouter>
 );
}

export default App;
