import Search from "./Search";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div>
          <p>💸</p>
            <span class = "button"><NavLink to="/">Home</NavLink></span>
            <span class = "button"><NavLink to="/about">About</NavLink></span>
          <Search/>
      </div>
    );
  }
  
  export default NavBar;