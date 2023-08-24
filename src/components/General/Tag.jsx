import React from 'react'

const Tag = ({ items }) => {    
  return (
  
    <>
        {items.map(item=>{
            <div className="tagItem" key={item.id}>
                <p className="tag">{item.name}</p>
                <div className='divider'></div>
                <input className="form-check-input" type="checkbox" value="" id={item.id}/>
            </div>
        })}
      
    </>
  )
}

export default Tag