import React from 'react'
import logo from '../images/logo2.png';

function Navigation() {
    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt=""></img>
            </div>
            <ul className="nav-items">
               <li>
                 <a href='#' className='home'>Home</a>
                </li> 
                <li>
                 <a href='#' className='about'>About</a>
                </li> 
                <li>
                 <a href='#' className='faqs'>FAQs</a>
                </li> 
                <li>
                 <a href='#' className='activity'>Activity</a>
                </li> 
                <li>
                 <a href='#' className='ctn'>Contact</a>
                </li> 
                <div className="primary-btn">GET CONNECTED</div>
            </ul>
        </div>
    )
}

export default Navigation;