import "./Footer.css";
import { IoMail } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="infoBox">
          <IoMail />
          <p className="infoBox__text">aliashooriyoon@yahoo.com</p>
        </div>
        <div className="infoBox">
          <FaTelegram />
          <p className="infoBox__text">@aliash_1386</p>
        </div>
      </div>
      <div className="footer__title">Deutsch now</div>
    </div>
  );
};
export default Footer;
