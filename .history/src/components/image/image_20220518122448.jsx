import React from 'react'

function image(props) {
  return (
    <div className='grey'>
        <img className='Thanos' src={props.item.img} alt={props.item.name}/>
    </div>
  )
}

export default image;