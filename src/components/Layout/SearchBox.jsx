import React from 'react'

const SearchBox = () => {
  return (
    <div className="modalOverlay">
            <div className='statusModal'>
                <div className="header">                       
                    <div className="titleClose">
                        <h4 className="bold">Create post</h4>
                        <div className="close"><span className="material-symbols-outlined icon">                  
                        close
                        </span></div>
                    </div>
                </div>
                <div className="flexContainer brandArea postArea statusModalText">
                    <div className="brandLogo">
                        <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
                    </div>
                    <div className='textArea'>
                        <input className='statusTextArea' placeholder='Enter search query'/>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                            <label className="form-check-label" for="flexSwitchCheckChecked">General market</label>
                        </div>
                    </div>                   
                </div> 
                <div className='searchResult'>
                    <p>Searching</p>
                </div>                
            </div>
        </div>
  )
}

export default SearchBox