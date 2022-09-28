import React from 'react'
import SmallHeading from './SmallHeading'

function MainTitle({title,subtitle,para}) {
  return (
    <div className='maintitle'>
       <SmallHeading title={subtitle}></SmallHeading>
       <h2>
          {title}
       </h2>
       <p>
          {para}
       </p>
    </div>
  )
}

export default MainTitle