import React from 'react'

function image(props) {
  return (
    <div>
        <img src={props.item.img}/>
    </div>
  )
}

export default image