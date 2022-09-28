import React from 'react'
import BlogsSection from './BlogsSection';
import ContactSection from './ContactSection';
// import DemonstrationSection from './DemonstrationSection';
import GradientCardsSection from './GradientCardsSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';

function BodyContent() {
  return (
    <div className='bodycontent'>
        <div className="InnerLayout">
          <MainTitle title={'Top Sellers This Month'} subtitle={'All Entrepreneurs' }/>
          <div className="sellercards">
            <SellerCard></SellerCard>
            <SellerCard></SellerCard>
            <SellerCard></SellerCard>
          </div>
          <BlogsSection></BlogsSection>
          <GradientCardsSection></GradientCardsSection>
          <ContactSection></ContactSection>
          <footer>
            <p><i>Developed By:Harinath Chaurasiya</i>&nbsp;&nbsp;&nbsp;Copyright ©2022. All Rights Reserved</p>
          </footer>
        </div>
    </div>
  )
}

export default BodyContent