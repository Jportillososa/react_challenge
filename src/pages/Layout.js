import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li className="navbar-links">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-links">
            <Link to="/products">Products</Link>
          </li>
          <li className="navbar-links">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
