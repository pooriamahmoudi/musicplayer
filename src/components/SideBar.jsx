import "../../public/css/sidebar.css";
import { GoHomeFill } from "react-icons/go";
import { LuMusic } from "react-icons/lu";
import { BsFolder, BsStars } from "react-icons/bs";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="up">
        <Link to={"/"} className="link">
          <GoHomeFill className="icon " />
        </Link>
        <Link className="link">
          <LuMusic className="icon" />
        </Link>
        <Link className="link">
          <BsFolder className="icon" />
        </Link>
        <Link className="link">
          <FaRegUser className="icon" />
        </Link>
      </div>
      <div className="line"></div>
      <div className="down">
        <FaRegHeart className="icon" />
        <BsStars className="icon" />
      </div>
    </div>
  );
};

export default SideBar;
