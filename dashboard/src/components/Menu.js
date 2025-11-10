// here we have used advanced concept of react called "hooks" is used, the hook used here is "{ useState }" this is a function
import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0); //state variable
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); //state variable

  //function
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen); // if currently its false then this will be true and vise versa
  };

  //this class is styled in css(i.e whenever the user takes cursor(hover) on USEDID the it will change to orange)
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

// THE ABOVE PART WAS BACKEND SETUP

  return (
    <div className="menu-container">
      {/* whenever the image is in public folder then for path just add the image name instead of full path */}
      <Link to="/">
          <img
            src="logo.png"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >

              {/* here below the class is set conditionally by using "className" and inside that we use ternary operator (i.e if selectedMenu === 0 then we give "activeMenuClass", if not active then we give normal "menuClass", as both "activeMenuClass" & "menuClass" are defined above )  */}

              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;