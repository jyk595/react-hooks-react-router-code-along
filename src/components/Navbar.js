import { NavLink } from 'react-router-dom';


function Navbar() {
    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    };
    
    return (
      <div>
        <NavLink to="/" exact style={linkStyles} activeStyle={{background:"darkblue"}}>
          Home
        </NavLink>
        <NavLink exact to="/about" style={linkStyles} activeStyle={{background:"darkblue"}}>
          About
        </NavLink>
        <NavLink exact to="/login" style={linkStyles} activeStyle={{background:"darkblue"}}>
          Login
        </NavLink>
      </div>
    )
}

export default Navbar