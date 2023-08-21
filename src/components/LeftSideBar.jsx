import React from 'react'
import "../scss/components/sidebars.css"
import Adcarosel from "./Adcarosel";

const LeftSideBar=()=> {
  return (
    <div className='leftSideContents'>
        <div class="flexContainer brandArea">
            <div class="brandLogo">
                <img src="https://w7.pngwing.com/pngs/361/627/png-transparent-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf-grass.png" />
            </div>
            <div>
                <a href="">
                    <h4 class="title boldFont brandTitle brandColor">Najiserve Technology</h4>
                    <p class="loggedIn"> Brand Tagline</p>
                </a>
            </div>
        </div>
        <div className='brandTools'>
            <div class="flexItem">
                <div class="icon">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                </div>
                <a href="">Customer Manager</a>
            </div>

            <div class="flexItem">
            <div class="icon">
                <span class="material-symbols-outlined">
                    add_shopping_cart
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/transaction/transactionManager.php">Order & Transactions</a>
        </div>
        <div class="flexItem">
            <div class="icon">
                <span class="material-symbols-outlined">
                    payments
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/finances/financeReport.php">Finance & Accounting</a>
        </div>
        <div class="flexItem">
            <div class="icon">
                <span class="material-symbols-outlined">
                    local_shipping
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/logistics/logisticsManager.php">Shipping & Logistics</a>
        </div>
        <div class="flexItem">
            <div class="icon">
                <span class="material-symbols-outlined">
                    reviews
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/feedback/reviews.php">Reviews & Ratings</a>
        </div>
        <div class="flexItem">
            <div class="icon">
                <span class="material-symbols-outlined">
                    rss_feed
                </span>
            </div>
            <a href="<?php echo $site; ?>sellercenter/modules/blogManagement/blogs.php">Content Management</a>
        </div>
        <div class="flexItem">
            <div class="icon">
                <span class="material-symbols-outlined">
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