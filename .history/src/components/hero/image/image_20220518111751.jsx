import React from 'react'

function image(props) {
  return (
    <div>
        <img src={props.item.img} alt={props.ite}/>
    </div>
  )
}

export default image;