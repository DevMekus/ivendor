import React from 'react'
import PageHeader from '../../components/General/PageHeader'
import { Outlet, Link } from "react-router-dom";

const NewProduct = () => {
  return (
    <div classNameNameName='generalContainer'>
      <PageHeader 
        pageTitle = 'New Product'
        pageDes = 'Vendors can create new product to sell to their customers.'
        inputPlaceholder = 'Product Id'
        filter={false}      
      />

        <div className="white-bg borderbrown radius10 sectionSpace scrollable ">
                    <div className="newproductFlexContainer">
                        <div className="formPadding">
                            <form>
                                <div>
                                    <p className="formSection">Complete Product Information</p>

                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Product Name </label>
                                        <div className="col-sm-8">
                                            <input type="text" className=" customInput" id="productName" name="productName" placeholder="Ex: Wlson kids Roger Federer 19 Tennis Racquet"/>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description "> Category/Type </label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <select className="customFormSelect" name="selectFilter">
                                                        <option value="All">-Select Category-</option> 
                                                    </select>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <input type="text" className=" customInput" id="productName" name="productName" placeholder="Ex: Sports Apparel"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Size/Color </label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="text" className=" customInput" id="productName" name="productName" placeholder="Ex: 10"/>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <select className="customFormSelect">
                                                        <option>-Select Color-</option>
                                                        <option>Green</option>
                                                        <option>Blue</option>
                                                        <option>Gold</option>
                                                    </select>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Description </label>
                                        <div className="col-sm-8">
                                            <textarea className=" customTextbox" id="exampleFormControlTextarea1" rows="3" placeholder="Any technical specifications or details about the product"></textarea>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <p className="formSection">Complete the Product Details form</p>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Material/Manufacturer </label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="text" className=" customInput" id="productName" name="productName" placeholder="Ex: Leather, Cloth"/>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <input type="text" className=" customInput" id="productName" name="productName" placeholder="Ex: Reebok, Nike"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Brand /Customizable</label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="text" className=" customInput" id="productName" name="productName" placeholder="Ex: Reebok, Nike"/>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <select className="customFormSelect">
                                                        <option selected>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="formSection">Complete the product Pricing Information</p>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Bid Price / Discount</label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="number" className=" customInput" id="productName" name="productName" placeholder="Ex: 1000.90"/>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <input type="number" className=" customInput" id="productName" name="productName" placeholder="Ex: 10"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="formSection">Complete your product Stock Information</p>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Sku / Quantity</label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                   
                                                    <input type="number" className=" customInput" id="productName" name="productName" value="" disabled/>
                                                    <input type="hidden" className=" customInput" id="productName" name="productName" value="<?php echo $sku; ?>"/>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <input type="number" className=" customInput" id="productName" name="productName" placeholder="Ex: 10"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Availability / Status</label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <select className="customFormSelect">
                                                        <option selected>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <select className="customTextbox">
                                                        <option selected>Active</option>
                                                        <option>Inactive</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="formSection">Select your product image in multiple views</p>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Front / Back</label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="file" className=" customInput" id="productName" name="productName" placeholder="Ex: 10"/>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <input type="file" className=" customInput" id="productName" name="productName" placeholder="Ex: 10"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-3 col-form-label description ">Right / Left</label>
                                        <div className="col-sm-8">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="file" className=" customInput" id="productName" name="productName" placeholder="Ex: 10"/>
                                                </div>
                                                <div className="col-sm-6 marginTopMobile">
                                                    <input type="file" className=" customInput" id="productName" name="productName" placeholder="Ex: 10"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <button className="btn btn-primary customForm fa-pull-right w200">Save Product</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

      </div>

    </div>
  )
}

export default NewProduct