import React from 'react'
import data from '../data'

function SellerCard() {
    return (
        <div className='sel-card'>
            <div className='para'>
            {
                data.map((item) => {
                    return <div key={item.id} className="SellerCard">
                        <div className="number">
                            <p>0 {item.id}</p>
                        </div>
                        <div className="profile">
                            <img src={item.image} alt="" />
                            <div className="text">
                                <h4>{item.name}</h4>
                                <p>{item.currency}</p>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default SellerCard