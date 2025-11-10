import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

//"Tooltip" - after hovering on buy, sell,.... we see the icons that is called as tooltip(this is avaliable in html, in which after hovering the text is visible )
import { Tooltip, Grow } from "@mui/material"; //here we are using "material ui" which is specifically used for REACT(which contains ready to use components) styling same as font-awesome (and this is used in most of the product based companies)

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price), //here for each stock we are extracting the price of that stock
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  // datasets: [
  //   {
  //     label: "# of Votes",
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       "rgba(255, 99, 132, 0.2)",
  //       "rgba(54, 162, 235, 0.2)",
  //       "rgba(255, 206, 86, 0.2)",
  //       "rgba(75, 192, 192, 0.2)",
  //       "rgba(153, 102, 255, 0.2)",
  //       "rgba(255, 159, 64, 0.2)",
  //     ],
  //     borderColor: [
  //       "rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)",
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      {/* This line is very imp, without this the WatchListItems will not be visible */}
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  // event listener
  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
      {/* down is "red" color & up is "green" */}
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo"> 
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {/* only when the 1st condition is true, the 2nd condition executes as && is used */}
      {/* calling WatchList is done in below */}
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// uid is uniquely identify each item. and used when eventlistener is attached
const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  // this below code is for hover effect on the WatchListActions
  return (
    <span className="actions">
      <span>
        {/* Tooltips are coming from "@mui/material" which is imported above (this is avaliable in html, in which after hovering, the text is visible ) */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          // the Grow is imported above which indicates the transition, hover or clicked on it
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          {/* BarChartOutlined gives us the chart(Analytics) icon */}
          <button className="action"><BarChartOutlined className="icon" /></button>
        </Tooltip>

        <Tooltip 
          title="More" 
          placement="top" 
          arrow 
          TransitionComponent={Grow}
        >
          {/* MoreHoriz gives us the More(...) icon */}
          <button className="action"><MoreHoriz className="icon" /></button>
        </Tooltip>

      </span>
    </span>
  );
};