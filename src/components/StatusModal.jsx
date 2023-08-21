import React from 'react'


const StatusModal = () => {
  let pageOverlay = document.querySelector(".pageOverlay")
  let display = document.querySelector(".modalOverlay").innerHTML;
  pageOverlay.innerHTML = display;
  pageOverlay.classList.add("displayPageOverlay")

  return (    
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
  )
}
export default StatusModal
