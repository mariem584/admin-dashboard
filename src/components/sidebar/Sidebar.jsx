import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import {Link} from 'react-router-dom'
import { DarkModeContext } from "../../context/darkMode";

// import { Link } from "@mui/material";
const Sidebar = () => {
const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{textDecoration:"none"}}>
        <span className="logo">Mariadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">lISTS</p>
          <Link to='/users' style={{textDecoration:"none"}}>

          <li>
            <Person2OutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          </Link>
          <Link to='/products' style={{textDecoration:"none"}}>
          
          <li>
            <StoreIcon  className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USRFUL</p>

          <li>
            <AssessmentIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <MonitorHeartIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom"> 
      <div className="colorOptions" onClick={()=> dispatch({type:"LIGHT"})}></div>
      <div className="colorOptions" onClick={()=> dispatch({type:"DARK"})}></div>
      {/* <div className="colorOptions"></div> */}

      </div>
    </div>
  );
};

export default Sidebar;
