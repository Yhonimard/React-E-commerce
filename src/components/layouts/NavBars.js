import { Navbar } from "flowbite-react";
import NavBrand, { NavLink } from "../Navbars/NavComp";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const NavBars = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="bg-gradient-to-br from-violet-800 to-violet-400 text-gray-200"
    >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Yhonimard E-Commerce
        </span>
      </Navbar.Brand>

      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </Navbar>
  );
};

export default NavBars;
