import React from 'react'

import Navbarseller from "../../components/Navbarseller";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from '../../components/RightSideBar';
import StatusPost  from "../../components/StatusPost"
import Post  from "../../components/Post"


const Home = () => {
  return (
    <div className="appContainer">
      <div className='pageOverlay'></div>
      <section className="flexedContainer">
        <section className="leftBrandSide flexSection scrollable">
        <LeftSideBar />  
        </section>
        <section className="centerContentSide flexSection scrollable">
          <Navbarseller /> 
          <StatusPost />  
          <Post />         
          <Post />         
        </section>
        <section className="rightProfileSide flexSection scrollable">
            <RightSideBar />
        </section>
      </section>
    </div>
  )
}

export default Home