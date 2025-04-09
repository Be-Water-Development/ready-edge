import { Link } from "react-router-dom";
import morningStarLogo from "./assets/morning-star-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <Link to="/">
            <img src={morningStarLogo} className="logo react" alt="Logo" />
          </Link>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Live View</a>
              <ul className="p-2">
                <li>
                  <a>Now</a>
                </li>
                <li>
                  <a>Network</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Live View</summary>
              <ul className="p-2">
                <li>
                  <Link to="/live-view/now">Now</Link>
                </li>
                <li>
                  <Link to="/live-view/network">Network</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/commands">Commands</Link>
          </li>

          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/setup">Setup</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Log In</a>
      </div>
    </div>
  );
};

export default Navbar;
