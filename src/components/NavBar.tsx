import { NavLink } from "react-router-dom";
import { useAuth } from "utils/auth";

const NavBar = () => {
  const { user } = useAuth();
  const navLinkStyle = {
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <nav className="nav-primary">
      <NavLink
        style={({ isActive }) => (isActive ? navLinkStyle : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? navLinkStyle : undefined)}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? navLinkStyle : undefined)}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? navLinkStyle : undefined)}
        to="/users"
      >
        Users
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? navLinkStyle : undefined)}
        to="/profile"
      >
        Profile
      </NavLink>
      {!user && (
        <NavLink
          style={({ isActive }) => (isActive ? navLinkStyle : undefined)}
          to="/login"
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;
