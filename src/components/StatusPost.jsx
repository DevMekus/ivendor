import React from 'react'
// import StatusModal from './StatusModal'


const StatusPost = () => {
  function showPostModal(){    
      let pageOverlay = document.querySelector(".pageOverlay")
      let display = `
          <div className='modalOverlay'>
              <div className='statusModal'>
                  <div class="header">                       
                      <div class="titleClose">
                          <h4 class="bold">Create post</h4>
                          <div class="close"><span class="material-symbols-outlined icon">
                          close
                          </span></div>
                      </div>
                  </div>
              </div>
          </div>
      `;

      pageOverlay.innerHTML = display;
      pageOverlay.classList.add("displayPageOverlay")
  }

  return (
    <div class="statusPostCon">
           <div class="flexContainer brandArea postArea">
                <div class="brandLogo">
                    <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
                </div>
                <div className='statusBox' onClick={showPostModal}>
                      Hi DevMekus, Say something to your customers. 
                </div>
            </div>  
    </div>
  )
}

export default StatusPost