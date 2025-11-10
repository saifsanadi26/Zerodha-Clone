import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

//"context" is basically a peace of item, which shares multiple components
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

//this is linked to dashboard.js
export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // if window is open then close here by the following code
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };//"uid" is name of the stock(i.e unique id of eack stock)

  // if window is close then open here by the following code
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children} 
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />} 
      {/* here uid is used to identify on which stock we have clicked */}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;