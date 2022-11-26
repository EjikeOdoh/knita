import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./navbar.css";
import { paths } from "../data";
import { Avatar, Badge } from "@mui/material";
import { AddShoppingCartOutlined, Search } from "@mui/icons-material";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => item.qty + qty, 0);
  };

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <h1>LOGO.</h1>
        </Link>
      </div>
      <div className="menu">
        <div className="searchbar">
          <form>
            <button type="submit">
              <Search />
            </button>
            <input type="text" name="searchbar" placeholder="Search" />
            <select name="category">
              <option style={{ display: "none" }} label=" "></option>
              <option label=" ">Categories</option>
              <option>Jobs</option>
              <option>Products</option>
              <option>Freelancers</option>
            </select>
          </form>
        </div>

        <ul>
          {paths.map((path, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path.path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {path.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="profile">
        <div className="cart">
          <Link to="/cart">
            <Badge badgeContent={getCartCount()} color="success">
              <AddShoppingCartOutlined />
            </Badge>
          </Link>
        </div>
        <div className="profile-picture">
          <Avatar src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/314485745_186278230639751_7427942595197823170_n.jpg?stp=dst-jpg_s640x640&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEJsBWoAJn0Swt5z2ubwTzJjNo0JNlLgdaM2jQk2UuB1uhgH7GanhH5KSOs83QJIGKaUGi7PRi7-WA92KWczg3B&_nc_ohc=d00EqN2h6bsAX8gVeDl&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AfCDEq3F_FkoSXxJHCRk5hyE31AVm_Jo4wgfcksqLUyYdg&oe=6375305D" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
