import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.scss";
import {
  ChatBubbleOutline,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkMode";

const Navbar = () => {
const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined onClick={()=> dispatch({type : 'TOGGLE'})} className="icon"  />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>{" "}
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>{" "}
          <div className="item">
            <ChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>{" "}
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              className="avatar"
              src="http://cdn.shopify.com/s/files/1/0337/9612/8812/articles/Curly_girl_be8d382d-cba8-42de-807b-f8bb8c599f89.jpg?v=1663934857"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
