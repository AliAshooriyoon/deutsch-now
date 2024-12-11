import "./Header.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="logoBox">
        <img
          src={process.env.PUBLIC_URL + `/images/logos/logoDE.svg`}
          alt=""
          className="logo"
        />
      </div>
      <div className="headerItemsBox">
        <ul className="headerItems">
          <Link to={"/"} className="header__item">
            Haus
          </Link>
          <Link className="header__item" to={"/download"}>
            herunterladen
          </Link>
          <Link className="header__item" to={"/about"}>
            Über uns
          </Link>
          <Link className="header__item" to={"/donate"}>
            Spenden
          </Link>
        </ul>
      </div>
      <div className="headerUserBox">
        <Link to={"/account/login"}>
          <FaUser />
        </Link>
      </div>
    </div>
  );
};
export default Header;
