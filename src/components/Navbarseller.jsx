import React from "react";

const Navbarseller = () => {
  
  function showsearch(){
    const searchBox = document.querySelector(".searchBox").classNameList.toggle("showSearchBox")   
  }

  function closeSearchBox(){
    const searchBox = document.querySelector(".searchBox").classNameList.remove("showSearchBox")   
  }

  return (
    <div className="fixedTopNavigation">
      <nav className="navbarContainer">
        <div className="navSide">
          <div className="navIcon  activeLink navlink " id="index">         
            <h4 className="bold">Ivendor</h4>
          </div>
          <div className="navIcon  activeLink navlink " id="index"  onClick={showsearch}>
            <span className="material-symbols-outlined">search</span>
            <div className="searchBox">
                <div className="header"><div onClick={closeSearchBox}><i className="fa fa-times" ></i></div></div>
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
            <a href="<?php echo $site; ?>sellercenter/modules/home/index.php">
              Home
            </a>
          </div>

          <div className="navIcon navlink" id="vendor">
            <span className="material-symbols-outlined">
              local_convenience_store
            </span>
            <a href="<?php echo $site; ?>sellercenter/modules/inventory/inventoryManager.php">
              Market
            </a>
          </div>
          <div className="navIcon navlink" id="vendor">
            <span className="material-symbols-outlined">forum</span>
            <a href="<?php echo $site; ?>sellercenter/modules/inventory/inventoryManager.php">
              Negotiate
            </a>
          </div>
        </div>
        <div className="navSide pushEnd">
          <div className="navIcon  activeLink navlink " id="index">
            <span className="material-symbols-outlined">notifications</span>
            <a href="<?php echo $site; ?>sellercenter/modules/home/index.php">
              notification
            </a>
          </div>
          <div className="navIcon navlink" id="vendor">
            <span className="material-symbols-outlined">support_agent</span>
            <a href="<?php echo $site; ?>sellercenter/modules/inventory/inventoryManager.php">
              Support
            </a>
          </div>
          <div className="navIcon navlink" id="vendor">
            <span className="material-symbols-outlined">account_circle</span>
            <a href="<?php echo $site; ?>sellercenter/modules/inventory/inventoryManager.php">
              Account
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarseller;
