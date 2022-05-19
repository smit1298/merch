import React from 'react'

function details(props) {
    const features = props.features 
    const listFeatures = features.map((feature) =>{
        <li>{feature}</li>
    })
  return (
  <>
<section>

</section>
<h3>{props.children}</h3>
<p>{props.children}</p>
<ul>{listFeatures}</ul>
  </>
  )
}

export default details