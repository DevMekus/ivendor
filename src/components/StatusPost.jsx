import React from 'react'
import StatusModal from "./StatusModal";

const StatusPost = () => {

    function displayModal(){
        <StatusModal />
    }

  return (
    <div className="statusPostCon">
           <div className="flexContainer brandArea postArea">
                <div className="brandLogo">
                    <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
                </div>
                <div className='statusBox' onClick={displayModal}>
                      Hi DevMekus, Say something to your customers. 
                </div>
            </div>  
    </div>
  )
}

export default StatusPost