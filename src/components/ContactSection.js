import React from 'react'
import map from '../images/map.png';

function ContactSection() {
  return (
    <div className='contact'>
        <div className="contact-info">
            <h3 className="contact-title">Contact Us</h3>
            <p>303 AryaBhatta Hostel, IET Lucknow</p>
            <p>+9177040xxxxx</p>
            <p>harinath20bst@gmail.com</p>
        </div>
        <div className="bg-image">
            <img src={map} alt="" />
        </div>
    </div>
  )
}

export default ContactSection