import React from 'react'
import "../scss/components/sidebars.css"

const RightSideBar = () => {
  return (
    <div className='rightSideContents'>
           <div class="flexContainer brandArea">
            <div class="brandLogo">
                <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" />
            </div>
                <div>
                    <a href="">
                        <h5 className="card-title">Emmanuel Nnaemeka <span className='settingsIcon'><i class="fa fa-cog" aria-hidden="true"></i></span></h5>
                        <p className="loginInfo">(DevMekus) <span className="redIcon"><i class="fa fa-clock" aria-hidden="true"></i> Logged in: 30min. ago</span></p>                                          
                    </a>
                </div>
            </div>

            <div className='brandTools'>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            campaign
                        </span>
                    </div>
                    <a href="#">Ads & Promotion</a>
                </div>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            school
                        </span>
                    </div>
                    <a href="<?php echo $site; ?>sellercenter/modules/education/lessons.php">Vendor Education</a>
                </div>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            monitoring
                        </span>
                    </div>
                    <a href="<?php echo $site; ?>sellercenter/modules/report/analysisReport.php">Analytics & Reporting</a>
                </div>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            handyman
                        </span>
                    </div>
                    <a href="#">Utility & Tool</a>
                </div>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            settings_account_box
                        </span>
                    </div>
                    <a href="<?php echo $site; ?>sellercenter/modules/settings/accountSettings.php">Configuration & Setting</a>
                </div>
                <p class="title boldFont">Special events</p>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            cake
                        </span>
                    </div>
                    <div class="badgeFlex">
                        <a href="#">Customer birthdays </a>
                        <span class="badge bg-danger">1</span>
                    </div>

                </div>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            star
                        </span>
                    </div>
                    <a href="#">Special sales</a>
                </div>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <div class="badgeFlex">
                        <a href="#">Wishlists </a>
                        <span class="badge bg-danger">1</span>
                    </div>

                </div>
                <div class="flexItem">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                    </div>
                    <div class="badgeFlex">
                        <a href="<?php echo $site; ?>sellercenter/modules/alerts/alertManagement.php">Events & Calendar </a>
                        <span class="badge bg-danger">3</span>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default RightSideBar