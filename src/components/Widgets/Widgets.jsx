import React from "react";
import "./widget.scss";
import {
  AccountBalanceOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Widgets = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        ismoney: false,
        link: "See all users",
        icon: <PersonOutlined className="icon" style={{ color: 'crimson', backgroundColor:'rgba(255,0,0,0.2)'}} />,
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        ismoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlined className="icon" style={{ color: 'goldenrod', backgroundColor:'rgba(218,165,32,0.2)'}}/>,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        ismoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlined className="icon" style={{ color: 'green', backgroundColor:'rgba(0,128,0,0.2)'}} />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        ismoney: true,
        link: "See details",
        icon: <AccountBalanceOutlined className="icon" style={{ color: 'purple', backgroundColor:'rgba(128,0,128,0.2)'}}/>,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
         <span className="title">{data.title}</span> 
        <span className="counter">
          {data.ismoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          {" "}
          <KeyboardArrowUp />
          20%
        </div>
        {/* <PersonOutlined className='icon'/> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
