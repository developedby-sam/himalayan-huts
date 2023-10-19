import "./navbar.styles.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Navbar = () => (
  <div className="navbar">
    <Link className="navbar__logo" to="/">
      <img className="navbar__logo-img" src={logo} alt="logo" />
      <h1 className="navbar__logo-text">
        <span className="bold-text">himalayan</span>
        <span className="normal-text">huts</span>
      </h1>
    </Link>
    <nav className="navbar__links">
      <Link to="/sale" className="navbar__links-link" href="#">
        For sale
      </Link>
      <Link to="/rent" className="navbar__links-link" href="#">
        For rent
      </Link>
      <Link to="/dailyRental" className="navbar__links-link" href="#">
        Daily Rental
      </Link>
    </nav>
    <nav className="navbar__accounts">
      <Link
        to="/advertise"
        className="navbar__accounts-link navbar__accounts-link-advertise"
        href="#"
      >
        Advertise
      </Link>
      <Link to="/signup" className="navbar__accounts-link" href="#">
        Log in
      </Link>
    </nav>
  </div>
);

export default Navbar;
