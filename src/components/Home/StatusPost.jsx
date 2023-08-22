import React from 'react'
import { useState } from 'react';
import StatusModal from './StatusModal'




const StatusPost = () => {
  const [showStatusModal, setshowStatusModal] = useState(false);

  const handlePostModal = () => {
    setshowStatusModal(true);
  };

  function closeModal(){ 
    setshowStatusModal(false);
  }



  return (   
    <div className="statusPostCon">    
      {showStatusModal && <StatusModal closeModal = {closeModal} />}   
        <div className="flexContainer brandArea postArea">
            <div className="brandLogo">
                <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
            </div>
            <div className='statusBox' onClick={handlePostModal}>
                  Hi DevMekus, Say something to your customers. 
            </div>
        </div>
      
    </div>
  )
}

export default StatusPost