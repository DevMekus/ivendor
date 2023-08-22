import React from 'react'
import "../../scss/components/sidebars.css"

const RightSideBar = (props) => {
  return (
    <div className='rightSideContents'>
            <div className='headSection'>
                <div className="menuHideDesk closeLeftMenu closeMenu pull-start" onClick={props.closeRightBar}>         
                        <span className="material-symbols-outlined">close</span>
                    </div>
                <div className="flexContainer brandArea">
                    <div className="brandLogo">
                        <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" />
                    </div>
                        <div>
                            <a href="">
                                <h5 className="card-title">Emmanuel Nnaemeka </h5>
                                <p className="loginInfo">(DevMekus) <span className="redIcon"><i className="fa fa-clock" aria-hidden="true"></i> Logged in: 30min. ago</span></p>                                          
                            </a>
                        </div>
                    </div>
           </div>

            <div className='brandTools'>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            campaign
                        </span>
                    </div>
                    <a href="#">Ads & Promotion</a>
                </div>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            school
                        </span>
                    </div>
                    <a href="<?php echo $site; ?>sellercenter/modules/education/lessons.php">Vendor Education</a>
                </div>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            monitoring
                        </span>
                    </div>
                    <a href="<?php echo $site; ?>sellercenter/modules/report/analysisReport.php">Analytics & Reporting</a>
                </div>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            handyman
                        </span>
                    </div>
                    <a href="#">Utility & Tool</a>
                </div>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            settings_account_box
                        </span>
                    </div>
                    <a href="<?php echo $site; ?>sellercenter/modules/settings/accountSettings.php">Configuration & Setting</a>
                </div>
                <p className="title boldFont">Special events</p>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            cake
                        </span>
                    </div>
                    <div className="badgeFlex">
                        <a href="#">Customer birthdays </a>
                        <span className="badge bg-danger">1</span>
                    </div>

                </div>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            star
                        </span>
                    </div>
                    <a href="#">Special sales</a>
                </div>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <div className="badgeFlex">
                        <a href="#">Wishlists </a>
                        <span className="badge bg-danger">1</span>
                    </div>

                </div>
                <div className="flexItem">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            calendar_month
                        </span>
                    </div>
                    <div className="badgeFlex">
                        <a href="<?php echo $site; ?>sellercenter/modules/alerts/alertManagement.php">Events & Calendar </a>
                        <span className="badge bg-danger">3</span>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default RightSideBar