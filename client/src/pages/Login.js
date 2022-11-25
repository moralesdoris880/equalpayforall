import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [display1, setDisplay1] = useState(true)
    const [display2, setDisplay2] = useState(false)

    function handleLogin(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => handleLoginSuccess(user));
            } else {
              r.json().then(() => console.log("Try again bub :<"));
            }
          });
    }

    function handleLoginSuccess(user){
        setUser(user)
        setDisplay1(false)
        setDisplay2(true)
    }
  
    
    return(
        <div>
          <div style={{display: display1? "block":"none"}}>
            <h1>Log in to EqualPayForAll</h1>
            <p>New to EqualPayForAll?</p>
            <Link to="/signup"><button>Sign Up</button></Link>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} ></input>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                <input type="submit" value="Login"></input>
            </form>
          </div>
          <div >
              <h1>Login Successful!</h1>
              <p>Welcome back {username}!</p>
              <Link to="/"><button >Home</button></Link>
          </div>
        </div>
    )
}

export default Login;