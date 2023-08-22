/**Importing React Dependencies */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**Importing App Pages */
import Home from "./pages/Home/Home.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";
import Market from "./pages/Market/Market.jsx";

/**Importing App Layout Component */
import LeftSideBar from "./components/Layout/LeftSideBar.jsx";
import RightSideBar from "./components/Layout/RightSideBar.jsx";
import Navbarseller from "./components/Layout/Navbarseller.jsx";

import "./scss/main.css";

function App() {
  function openLeftBar() {
    const leftBar = document.querySelector(".leftBrandSide");
    leftBar.classList.add("showsideBar");
  }

  function closeLeftBar() {
    const leftBar = document.querySelector(".leftBrandSide");
    leftBar.classList.remove("showsideBar");
  }

  function openRightBar() {
    const rightBar = document.querySelector(".rightProfileSide");
    rightBar.classList.add("showRightsideBar");
  }
  function closeRightBar() {
    const rightBar = document.querySelector(".rightProfileSide");
    rightBar.classList.remove("showRightsideBar");
  }
  return (
    <div className="appContainer">
      <section className="flexedContainer">
        <section className="leftBrandSide flexSection scrollable">
          <LeftSideBar closeBar={closeLeftBar} />
        </section>
        <section className="centerContentSide flexSection scrollable">
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <Navbarseller
                    openLeftBar={openLeftBar}
                    openRightBar={openRightBar}
                  />
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="market" element={<Market />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </section>
        <section className="rightProfileSide flexSection scrollable">
          <RightSideBar closeRightBar={closeRightBar} />
        </section>
      </section>
    </div>
  );
}

export default App;
