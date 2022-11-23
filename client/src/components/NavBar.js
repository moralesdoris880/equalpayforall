function NavBar() {
    return (
      <div>
        <p>💸</p>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
        <Search />
      </div>
    );
  }
  
  export default NavBar;