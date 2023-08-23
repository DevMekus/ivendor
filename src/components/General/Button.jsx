import React from 'react'

const Button = (props) => {
  return (
    <button className={props.classProps}>{props.title}</button>
  )
}

export default Button