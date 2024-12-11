import "./Download.css";
import { Link } from "react-router-dom";
const Download = () => {
  return (
    <div className="download">
      <p className="download__title">Download on your Device</p>
      <div className="download__yourOS">
        <div className="download__OS__icon">
          <img src="images/operating-system-100.png" alt="" />
        </div>
        <span>Select Your Operating System :</span>
      </div>
      <div className="OS__info">
        <p className="OS__info__title">
          <img src="images/icons8-linux-100 (1) 1.svg" alt="" />
          Download on Linux :
        </p>
        <Link to={"#"} className="distro__info">
          <img
            src="images/icons8-redhat 1.png"
            alt=""
            className="distro__logo"
          />
          <p className="redhat__title">Redhat Base </p>
        </Link>
        <Link to={"#"} className="distro__info">
          <img
            src="images/icons8-arch-linux 1.svg"
            alt=""
            className="distro__logo"
          />
          <p className="redhat__title">Arch Base </p>
        </Link>
        <Link to={"#"} className="distro__info">
          <img
            src="images/icons8-debian-100 1.svg"
            alt=""
            className="distro__logo"
          />
          <p className="redhat__title">Debian Base </p>
        </Link>
      </div>
      <div className="OS__info">
        <p className="OS__info__title">
          <img src="images/icons8-windows-10 1.svg" alt="" />
          Download on Windows :
        </p>
        <Link to={"#"} className="distro__info">
          <img
            src="images/icons8-64-bit-52 1.svg"
            alt=""
            className="distro__logo"
          />
          <p className="distro__title">64 Bit </p>
        </Link>
        <Link to={"#"} className="distro__info">
          <img
            src="images/icons8-32-bit-52 1.svg"
            alt=""
            className="distro__logo"
          />
          <p className="distro__title"> 32 Bit </p>
        </Link>
        <Link to={"#"} className="distro__info">
          <img src="images/Group 1.svg" alt="" className="distro__logo" />
          <p className="distro__title">Arm Base </p>
        </Link>
      </div>
      <div className="phone">Für Handy ist später bereit!</div>
    </div>
  );
};
export default Download;
