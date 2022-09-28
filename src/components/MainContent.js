import React from 'react'
import Navigation from './Navigation'
import SmallHeading from './SmallHeading';
import blockchain from '../images/bchain.png';
import CtaButton from './CtaButton';

function MainContent() {
  return (
    <div className='maincontent'>
        <Navigation/>
        <div className="content">
          <div className="left">
           <SmallHeading title={'All Digital Currencies in One Place'} identifier={'Before'}/>
           <div className="blog">
           <h1>
              All NFTs You need in One Marketplace
              The Best Place to Collect,Buy and Sell <span className='GradientText'>Awesome NFTs</span> 
            </h1>
           </div>
           <div className="paragraph">
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. 
              Cumque obcaecati sint officiis quis laboriosam vitae, error molestiae temporibus 
              voluptatum consectetur, 
              quibusdam magni, delectus a autem soluta optio laborum!
            </p>
           </div>
            <div className="btns-con">
            <CtaButton name={'dicover more'}/>
            <CtaButton name={'get Help'}/>
            </div>
          </div>
          <div className="right">
           <img src={blockchain} alt="" />
          </div>
        </div>
    </div>
  )
}

export default MainContent;