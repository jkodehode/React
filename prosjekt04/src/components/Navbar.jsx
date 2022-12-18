import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <ul className="menu-bar">
        <li className="nav-link">
          <FontAwesomeIcon className="menuItem" icon={faGoogle} />
        </li>
        <li className="nav-link">
          <FontAwesomeIcon className="menuItem" icon={faGoogle} />
        </li>
        <li className="nav-link">
          <FontAwesomeIcon className="menuItem" icon={faGoogle} />
        </li>
        <li className="nav-link">
          <FontAwesomeIcon className="menuItem" icon={faGoogle} />
        </li>
        <li className="nav-link">
          <FontAwesomeIcon className="menuItem" icon={faGoogle} />
        </li>
      </ul>
    </>
  );
};

export default Navbar;
