import React from 'react'
import PageHeader from '../../components/General/PageHeader'
import { Outlet, Link } from "react-router-dom";


const Inventory = () => {

    
  const optionsArray = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div classNameName='generalContainer'>
      <PageHeader 
        pageTitle = 'Inventory Management'
        pageDes = 'Manage all your products on display and reselling items'
        inputPlaceholder = 'Product Id'
        searchFilter = {optionsArray}
        filter = {true}
      />

        <div className="white-bg scrollable">
            <div className="sectionSpace">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#catalogue" type="button" role="tab" aria-controls="catalogue" aria-selected="true">Catalogue</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#reseller" type="button" role="tab" aria-controls="reseller" aria-selected="false">Reseller</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#wishlist" type="button" role="tab" aria-controls="wishlist" aria-selected="false">Wishlist & Custom</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#inventory" type="button" role="tab" aria-controls="inventory" aria-selected="false">Inventory</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="catalogue" role="tabpanel" aria-labelledby="home-tab">
                        <div className="sectionSpace">
                            <div className="flex space_between heading-area">
                                <div>
                                    <h3 className="subtitleColor pageTitle">Products Catalogue</h3>
                                    <p className="pageDesc">Create, edit and delete products in their catalog.</p>
                                </div>
                                <div>
                                <Link to="newP" className="btn btn-primary w200 btn-sm customForm">New Product</Link>
                                </div>
                            </div>
                            
                            <section className="sales_metrics sectionSpace">
                                <div className="metric_wrapper">
                                    <div className="metric card actives">
                                        <div className="card-body metric-body">
                                            <h5 className="card-title">Products</h5>
                                            <p className="font14">Total products managed by vendor.</p>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div className="metric card">
                                        <div className="card-body metric-body">
                                            <h5 className="card-title">Photos</h5>
                                            <p className="font14">Total products images by this vendor.</p>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div className="metric card">
                                        <div className="card-body metric-body">
                                            <h5 className="card-title">Videos</h5>
                                            <p className="font14">Total products videos by this vendor.</p>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div className="metric card">
                                        <div className="card-body metric-body">
                                            <h5 className="card-title">Wishlist</h5>
                                            <p className="font14">Total products wishlist available.</p>
                                            <h4>0</h4>
                                        </div>
                                    </div>
                                    <div className="metric card">
                                        <div className="card-body metric-body">
                                            <h5 className="card-title">Customization</h5>
                                            <p className="font14">Total products customization request.</p>
                                            <h4>0</h4>
                                        </div>
                                    </div>


                                </div>
                            </section>
                            <div className="scrollable">
                                <table className="table table-bordered table-hover">
                                    <thead className="ctable-success ctable">
                                        <tr>
                                            <th scope="col">Prod.Id</th>
                                            <th scope="col">Product</th>                                            
                                            <th scope="col">Type</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Inventory</th>
                                            <th scope="col" className="text-center">...</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>
                                                <p className="font14"> 43542</p>
                                            </td>
                                            <td className="row-title">
                                                <p className="font14"> Kamis Chocolate Red Cake</p>
                                            </td>
                                           
                                            <td>
                                                <p className="font14"> Reselling</p>                                           
                                            </td>
                                            <td>
                                                <p className="font14 redColor"><b>$349.10</b></p>
                                            </td>
                                            <td>
                                                <p className="font14"> Flour meals</p>
                                            </td>
                                            <td>
                                                <p className="font14"> 30</p>
                                            </td>
                                            <td className="tableaction">
                                                <a href="salesData.php" className="btn btn-primary btn-sm"><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                                              
                                                <button className="btn btn-danger btn-sm"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <div aria-label="Page navigation example">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="reseller" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="sectionSpace">
                            <div className=" flex space_between heading-area padding20">
                                <div className="title-section p">
                                    <h3 className="subtitleColor pageTitle">Products Reselling</h3>
                                    <p className="pageDesc">Resell another vendors product when you have a ready market.</p>
                                </div>
                                <div >
                                    <div>
                                        <select className="customFormSelect customForm formBorder w200" aria-label=" Default select example">
                                            <option  value="" selected>-All Product-</option>
                                            <option  value="Free shipping">Reselling</option>
                                            <option  value="Best match">Resellers</option>
                                        </select>
                                    </div>
                                  
                                   
                                </div>
                            </div>

                        </div>

                        <div className="scrollable sectionSpace">
                            <table className="table table-bordered table-hover">
                                <thead className="ctable-success ctable">
                                    <tr>
                                        <th scope="col">Product </th>
                                        <th scope="col">Vendor</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Commission</th>
                                        <th scope="col" className="text-center">...</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td className="row-title">
                                            <p className="font14"> Kamis Chocolate Red Cake</p>
                                        </td>
                                        <td>
                                            <a href="#" className="font14 showOnHover">Kamis Bakery</a>
                                            
                                        </td>

                                        <td>
                                            <p className="font14 redColor"><b>$349.10</b></p>
                                        </td>
                                        <td>
                                            <p className="font14"> Flour meals</p>
                                        </td>
                                        <td>
                                            <p className="font14 redColor"> $100.00</p>
                                        </td>
                                        <td className="tableaction">
                                            <button className="btn btn-primary btn-sm"><i className="fa fa-check" aria-hidden="true"></i> <span className="hide_on_phone">Resell</span></button>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                        <div aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="wishlist" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="sectionSpace">
                            <div className="space_between heading-area padding20">
                                <div className="title-section p">
                                    <h3 className="subtitleColor pageTitle">Products Wishlist</h3>
                                    <p className="pageDesc">Customer wishlists and customization requests</p>
                                </div>
                                <div>
                                    <div>
                                        <select className="customFormSelect w200 customForm formBorder" aria-label=" Default select example">
                                            <option  value="" selected>Wishlists</option>
                                            <option  value="Free shipping">Customization</option>
                                            <option  value="Best match">Area wishlist</option>
                                        </select>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                        <div className="sectionSpace">

                            <div className="scrollable">
                                <table className="table table-bordered table-hover">
                                    <thead className="ctable-success ctable">
                                        <tr>
                                            <th>Prod.Id</th>
                                            <th>Type</th>
                                            <th>Product</th>
                                            <th>Customer</th>
                                            <th>Price</th>
                                            <th>Date</th>
                                            <th scope="col" className="text-center">...</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="row-title">
                                                <p className="font14">DHJ73277</p>

                                            </td>
                                            <td>
                                                <p className="font14">WISHLIST</p>

                                            </td>
                                            <td>
                                                <p className="font14">Childrens Towel</p>

                                            </td>

                                            <td>
                                                <a href="" className="font14">Ben Ukwuani</a>

                                                
                                            </td>
                                            <td>
                                                <p className="font14 redColor">$340.20</p>
                                            </td>
                                            <td>
                                                <p className="font14">June 12, 2023 11:54 AM</p>
                                            </td>

                                            <td className="tableaction">
                                                <a href="salesData.php?sku=DHJ73277" className="btn btn-primary btn-sm"><i className="fa fa-eye"></i></a>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>

                            <div aria-label="Page navigation example">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="inventory" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="sectionSpace">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#stockManager" type="button" role="tab" aria-controls="home" aria-selected="true">Stock Manager</button>
                                </li>


                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#cancellationManager" type="button" role="tab" aria-controls="contact" aria-selected="false">Cancellation Manager</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="stockManager" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="sectionSpace">
                                        <div className=" flex space_between heading-area padding20">
                                            <div className="title-section p">
                                                <h3 className="subtitleColor pageTitle">Stock Management</h3>
                                                <p className='pageDesc'>Overview of current inventory status, as well as tools to manage and track your stock levels. </p>
                                            </div>
                                            <div >
                                                <div>
                                                    <select className="customFormSelect w200 customForm formBorder" aria-label=" Default select example">
                                                        <option  value="" selected>-All Product-</option>
                                                        <option  value="Free shipping">Out of Stock</option>
                                                        <option  value="Best match">...</option>
                                                        <option  value="New item">...</option>
                                                    </select>
                                                </div>
                                               
                                            </div>
                                        </div>

                                    </div>
                                    <div className="sectionSpace">
                                        <section className="sales_metrics sectionSpace">
                                            <div className="metric_wrapper">
                                                <div className="metric card actives">
                                                    <div className="card-body metric-body">
                                                        <h5 className="card-title">products in stock</h5>
                                                        <p className="font14">Products in our store.</p>
                                                        <h4>0</h4>
                                                    </div>
                                                </div>
                                                <div className="metric card">
                                                    <div className="card-body metric-body">
                                                        <h5 className="card-title">products sold</h5>
                                                        <p className="font14">Number of products sold</p>
                                                        <h4>0</h4>
                                                    </div>
                                                </div>
                                                <div className="metric card">
                                                    <div className="card-body metric-body">
                                                        <h5 className="card-title">products on order</h5>
                                                        <p className="font14">product to be delivered</p>
                                                        <h4>0</h4>
                                                    </div>
                                                </div>


                                            </div>
                                        </section>


                                        <div className="scrollable sectionSpace">
                                            <table className="table table-bordered table-hover">
                                                <thead className="ctable-success ctable">
                                                    <tr>
                                                        <th scope="col">Sku</th>
                                                        <th scope="col">Product </th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Qty</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col" className="text-center">...</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>
                                                            <p className="font14"> 43542</p>
                                                        </td>
                                                        <td className="row-title">
                                                            <p className="font14"> Kamis Chocolate Red Cake</p>
                                                        </td>

                                                        <td>
                                                            <p className="font14 redColor"><b>$349.10</b></p>
                                                        </td>
                                                        <td>
                                                            <p className="font14"> Flour meals</p>
                                                        </td>
                                                        <td>
                                                            <p className="font14"> 30</p>
                                                        </td>
                                                        <td>
                                                            <p className="font14 greenColor">ACTIVE</p>
                                                        </td>
                                                        <td className="tableaction">
                                                            <a href="manageStock.php" className="btn btn-sm btn-primary"><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                                                            <button className="btn btn-sm btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div aria-label="Page navigation example">
                                            <ul className="pagination justify-content-end">

                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="tab-pane fade" id="cancellationManager" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="sectionSpace">
                                        <div className="title-section sectionSpace p">
                                            <h3 className="subtitleColor pageTitle">Returns & Cancellation</h3>
                                            <p className="pageDesc">Manage all the products returns and cancellations.</p>
                                        </div>

                                        <section className="sales_metrics sectionSpace">
                                            <div className="metric_wrapper">
                                                <div className="metric card actives">
                                                    <div className="card-body metric-body">
                                                        <h5 className="card-title">Returns </h5>
                                                        <p className="description">Products returned after purchase</p>
                                                        <h4>1</h4>
                                                    </div>
                                                </div>
                                                <div className="metric card">
                                                    <div className="card-body metric-body">
                                                        <h5 className="card-title">Cancelled </h5>
                                                        <p className="description">Products cancelled after order</p>
                                                        <h4>1</h4>
                                                    </div>
                                                </div>


                                            </div>
                                        </section>


                                        <div className="scrollable sectionSpace">
                                            <table className="table table-bordered table-hover">
                                                <thead className="ctable-success ctable">
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Sku</th>
                                                        <th>Category</th>
                                                        <th>Qty</th>
                                                        <th>Price</th>
                                                        <th>Action</th>
                                                        <th scope="col" className="text-center">...</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td className="row-title">
                                                            <p className="font14"> Kamis Chokolate cake</p>
                                                        </td>
                                                        <td>
                                                            <p className="font14 redColor">DG377HJ8</p>
                                                        </td>
                                                        <td>
                                                            <p className="font14">Floor Meal</p>
                                                        </td>
                                                        <td>
                                                            <p className="font14">2</p>
                                                        </td>
                                                        <td>
                                                            <p className="font14 redColor">$20.90</p>
                                                        </td>
                                                        <td>
                                                            <p className="font14">CANCELLED</p>
                                                        </td>
                                                        <td className="tableaction">
                                                            <a href="manageReturns.php" className="btn btn-sm btn-primary"><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                                                            <button className="btn btn-sm btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div aria-label="Page navigation example">
                                            <ul className="pagination justify-content-end">

                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
        
    </div>
    
  )

}

export default Inventory