import React from 'react'

function image(props) {
  return (
    <div>
        <img src={props.item.img} alt=""/>
    </div>
  )
}

export default image;