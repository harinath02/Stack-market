import React from 'react'

function SmallHeading({title,identifier}) {
  return (
    <div className='smallcontent'>
        <h3 className={identifier}>{title}</h3>
  
    </div>
  )
}

export default SmallHeading;