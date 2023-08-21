import React from 'react'
import "../scss/components/sidebars.css"
import Adcarosel from "./Adcarosel";

const LeftSideBar=()=> {
  return (
    <div className='leftSideContents'>
        <div className="flexContainer brandArea">
            <div className="brandLogo">
                <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
            </div>
            <div>
                <a href="">
                    <h4 className="title boldFont brandTitle brandColor">Najiserve Technology</h4>
                    <p className="loggedIn"> Brand Tagline</p>
                </a>
            </div>
        </div>
        <div className='brandTools'>
            <div className="flexItem">
                <div className="icon">
                    <span className="material-symbols-outlined">
                        person
                    </span>
                </div>
                <a href="">Customer Manager</a>
            </div>

            <div className="flexItem">
            <div className="icon">
                <span className="material-symbols-outlined">
                    add_shopping_cart
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/transaction/transactionManager.php">Order & Transactions</a>
        </div>
        <div className="flexItem">
            <div className="icon">
                <span className="material-symbols-outlined">
                    payments
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/finances/financeReport.php">Finance & Accounting</a>
        </div>
        <div className="flexItem">
            <div className="icon">
                <span className="material-symbols-outlined">
                    local_shipping
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/logistics/logisticsManager.php">Shipping & Logistics</a>
        </div>
        <div className="flexItem">
            <div className="icon">
                <span className="material-symbols-outlined">
                    reviews
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/feedback/reviews.php">Reviews & Ratings</a>
        </div>
        <div className="flexItem">
            <div className="icon">
                <span className="material-symbols-outlined">
                    rss_feed
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/blogManagement/blogs.php">Content Management</a>
        </div>
        <div className="flexItem">
            <div className="icon">
                <span className="material-symbols-outlined">
                    sentiment_extremely_dissatisfied
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/disputes/disputeManager.php">Dispute Management.</a>
        </div>
            
        </div>
        <div className="advertcarousel">
            <Adcarosel />
        </div>
    </div>
  )
}

export default LeftSideBar