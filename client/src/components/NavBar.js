import Search from "./Search";
import { NavLink, Link } from "react-router-dom";

function NavBar({setUser,user}) {

  function handleLogout(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  const x = {
    display: user? "block":"none"
  }
    return (
      <div>
          <p>💸</p>
            <span class = "button"><NavLink to="/">Home</NavLink></span>
            <span class = "button"><NavLink to="/about">About</NavLink></span>
            <button onClick={handleLogout} style={x}>Logout</button>
          <Search/>
      </div>
    );
  }
  
  export default NavBar;