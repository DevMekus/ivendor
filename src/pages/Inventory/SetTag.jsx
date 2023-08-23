import React from 'react'
import PageHeader from '../../components/General/PageHeader'
import Tag from '../../components/General/Tag';


const SetTag = () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ];
  return (
    <div className='generalContainer'>
        <PageHeader 
            pageTitle = 'Tag & Customization'
            pageDes = 'Make your product searchable by adding tags to them.'
            inputPlaceholder = 'Product Id'
            filter = {false}      
        />

      <div className="tagBorder">
          <h4 className="pageTitle subtitleColor">Product Tags</h4>
          <p className="pageDesc">Choose a tag that best describes this product <span className="hideOnMobile">for easy search and identification by customers</span></p>
      </div>   
      <form className="tagContainer" name='tagForm'>
            <Tag items={items}/>        
          <button className="btn btn-primary customForm">Save Tag</button>
      </form> 

      <div className="tagBorder sectionSpace">
          <h4 className="pageTitle subtitleColor">Product Customization</h4>
          <p className="pageDesc">Choose the features in the product that the customer can customize</p>
      </div>  

       {/* <form className="tagContainer">
          <div className="tagItem">
              <p className="tag">Size</p>
              <div classNameName='divider'></div>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          </div>
          <div className="tagItem">
              <p className="tag">Color</p>
              <div classNameName='divider'></div>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          </div>
          <button className="btn btn-primary customForm">Save Changes</button>
      </form>         */}


    </div>
  )
}

export default SetTag