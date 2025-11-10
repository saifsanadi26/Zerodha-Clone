import React, { useState, useEffect } from "react";  //"useState" is used to store data, and "useEffect" to connect API
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // "axios" is a package which will help us to connect to API
  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      // console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);


  //this entire thing is taken from "CHART.JS" called "Vertical Chart" and this creates a graph in Holdings inside dashboard
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray["name"]);  //this will go throught all holdingsand it will create something called labels, but it will contain all the holding names only

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {/* Dynamic data i.e is data that comes from "files or api"   */}
          {allHoldings.map((stock, index) => {
            // creating temp variables like curValue, isProfit... to calculate data
            const curValue = stock.price * stock.qty; // the price, qty, avg ... is all defined in holdings in data.js, so that data comes from there as we have defined .map above
            const isProfit = curValue - stock.avg * stock.qty >= 0.0; // by this we get to know wheather to display red or green that is profit or loss
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return ( 
              //"index" means the part written in data.js (i.e "export const holdings =")
              <tr key={index}>  
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td> {/* .toFixed(2) will make it go to 2 decimal places */}
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;