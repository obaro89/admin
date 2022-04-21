import React from "react";
import "./widget.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import CurrencyPoundOutlinedIcon from "@mui/icons-material/CurrencyPoundOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  let data;
  let amount = 1000;
  let diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all Users",
        icon: (
          <PersonOutlineOutlined
            className="icon"
            style={{
              color: "red",
              backgroundColor: "rgba(255, 0, 0, 0.233)",
              borderRadius: "3px",
              padding: "4px",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View earnings",
        icon: (
          <CurrencyPoundOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.329)",
              borderRadius: "3px",
              padding: "4px",
            }}
          />
        ),
      };

      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(220, 20, 60, 0.26)",
              borderRadius: "3px",
              padding: "4px",
            }}
          />
        ),
      };

      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View orders",
        icon: (
          <RoomServiceOutlinedIcon
            className="icon"
            style={{
              color: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.26)",
              borderRadius: "3px",
              padding: "4px",
            }}
          />
        ),
      };
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowUpwardIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
