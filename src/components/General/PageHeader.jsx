import React from 'react'
import { useState } from 'react';
import Button from './Button';

const PageHeader = (props) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange=()=>{

    }
  return (       
        <div className="pageHeader">
            <div className="heading-area">
                <h1 className="brandColor pageTitle">{props.pageTitle}</h1>
                <p className='pageDesc'>{props.pageDes} </p>                
            </div>
            {props.filter && 
                <div >
                    <div>
                        <input className="customInput w200 customForm formBorder" type="search" placeholder={props.inputPlaceholder} />
                    </div>
                    <div>
                        {props.searchFilter && 
                        <select className="customFormSelect w200 sectionSpace customForm formBorder" value={selectedOption} onChange={handleSelectChange}>
                            {props.searchFilter.map((option, index) => {
                                <option key={index} value={option}>
                                {option}
                            </option>
                            })}                       
                                                
                        </select>
                        }
                    </div>
                    <Button 
                        title="Search"
                        classProps = "btn btn-primary btn-sm customForm sectionSpace"
                    />  

                </div>
            }
        </div>

  
  )
}

export default PageHeader