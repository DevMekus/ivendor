import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbarseller = (props) => {
  
  return (
      <>
      <div className="fixedTopNavigation">
      <nav className="navbarContainer">
        <div className="navSide">
          <div className="navIcon  activeLink navlink menuHideDesk" id="index" onClick={props.openLeftBar}>         
            <span className="material-symbols-outlined">menu</span>
          </div>
          <div className="navIcon  activeLink navlink " id="index">         
            <h4 className="bold brandName">Ivendor</h4>
          </div>
          <div className="navIcon  activeLink navlink " id="index">
            <span className="material-symbols-outlined">search</span>
            <div className="searchBox">
                <div className="header"><div><i className="fa fa-times" ></i></div></div>
                <div className="form"><input type="search" className="searchInput" placeholder="Search" /></div>
                <div className="searchResult">
                  <p>Searching result...</p>
                </div>
            </div>
          </div>
        </div>
        <div className="navSide">
          <div className="navIcon  activeLink navlink " id="index">
            <span className="material-symbols-outlined">home</span>
            <a href="#">
              <Link to="/">Home</Link>
            </a>
          </div>

          <div className="navIcon navlink" id="vendor">
            <span className="material-symbols-outlined">
              local_convenience_store
            </span>
            <a href="#">
            <Link to="inventory">Inventory</Link>
            </a>
          </div>
          <div className="navIcon navlink" id="vendor">
            <span className="material-symbols-outlined">forum</span>
            <a href="#">
              <Link to="market">Market</Link>
            </a>
          </div>
        </div>
        <div className="navSide pushEnd">
          <div className="navIcon  activeLink navlink " id="index">
            <span className="material-symbols-outlined">notifications</span>
            <a href="#">
              notification
            </a>
          </div>
          <div className="navIcon navlink" id="vendor">
            <span className="material-symbols-outlined">support_agent</span>
            <a href="#">
              Support
            </a>
          </div>
          <div className="navIcon navlink menuHideDesk" id="vendor" onClick={props.openRightBar}>
            <span className="material-symbols-outlined">account_circle</span>
            <a href="#">
              Account
            </a>
          </div>
        </div>
     
      </nav>
    
    </div>
    <Outlet />
      </>
     
  );
};

export default Navbarseller;
