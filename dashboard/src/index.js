import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Home from "./components/Home";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* here the "/*" indicates the changes is made inside not entire page like, without this the entire dashboard wont work as this is used in menu.js (like different routes called orders, holdings .....) */}
        <Route path="/*" element={<Home />}></Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

