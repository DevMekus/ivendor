import React from 'react'
import { useState } from 'react';



const StatusModal = (props) => {    

  return (    

        <div className="modalOverlay">
            <div className='statusModal'>
                <div className="header">                       
                    <div className="titleClose">
                        <h4 className="bold">Create post</h4>
                        <div className="close"><span className="material-symbols-outlined icon" 
                            onClick={props.closeModal}>
                        close
                        </span></div>
                    </div>
                </div>
                <div className="flexContainer brandArea postArea statusModalText">
                    <div className="brandLogo">
                        <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
                    </div>
                    <div className='textArea'>
                        <textarea className='statusTextArea' placeholder='Write your message'></textarea>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                            <label className="form-check-label" for="flexSwitchCheckChecked">General market</label>
                        </div>
                    </div>                   
                </div> 
                <div>
                    <div className='attachementForm'></div>
                        <div className="attachmentArea">                 
                                <div><p className="bold">Add to this post</p></div>
                                <div className="postAttachment">
                                    <span className="material-symbols-outlined attachment" id="attachImage">
                                    image
                                    </span>
                                    <span className="material-symbols-outlined attachment" id="attachVideo">
                                    play_circle
                                    </span>
                                    <span className="material-symbols-outlined attachment" id="attachCustomer">
                                    person
                                    </span>
                                    <span className="material-symbols-outlined attachment" id="attachLocation">
                                    home_pin
                                    </span>
                                    <span className="material-symbols-outlined attachment" id="attachMusic">
                                    music_note
                                    </span>
                                </div>
                        </div>
                </div>

                <div className="BoostArea">
                    <div className="boostIcon">
                        <span className="material-symbols-outlined">
                        campaign
                        </span>
                        <div>
                            <p className="bold">Boost post</p>
                            <p className="loggedIn">Boost this post to target more audience</p>
                        </div>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                        <label className="form-check-label" for="flexSwitchCheckChecked"></label>
                    </div>
                </div> 

                <div className="d-grid gap-2 buttonArea">
                        <button className="btn btn-primary" type="button">Button</button>               
                </div>
            </div>
        </div>
  )
}
export default StatusModal
