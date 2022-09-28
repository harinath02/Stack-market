import React from 'react'
import time from '../images/time.svg';
import heart from '../images/heart.svg';
import CtaButton from './CtaButton';

function GradientCard({image,avatar,name,price,title,ctaButton}) {
  return (
    <div className='GradientCard'>
         <div className="g-card">
            <div className="inner-content">
                <div className="image">
                    <img src={image} alt=""/>
                    {/* <div className="name">
                        <img src={avatar} alt=""/>
                        <p>{name}</p>
                    </div> */}
                </div>
                <div className="card-content">
                    <h6 className="card-name">{title}</h6>
                    <p>Price <span className="price">{price}</span> &nbsp; &nbsp; <span className="l-text">1 of 15</span></p>
                    <p>Highest Bid : &nbsp; <span className="price">{price}</span> </p>
                    <div className="duration">
                        <p><img src={time} alt="" /> 7 Hours Ago</p>
                        <p><img src={heart} alt="" /> 200 Likes</p>
                    </div>
                    <div className="cta-btn">
                        {CtaButton}
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default GradientCard