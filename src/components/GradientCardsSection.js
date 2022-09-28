import React from 'react'
import GradientCard from './GradientCard'
import MainTitle from './MainTitle'
import avatar from '../images/avata.jpg';
import person from '../images/person.jpg';
import person2 from '../images/bitcoin3.jpg';
import bitcoin2 from '../images/bitcoin2.jpg';
import bitcoin from '../images/bitcoin.jpg';
import person3 from '../images/person3.jpg';
import computer from '../images/computer.jpg';
import CtaButton from './CtaButton';

function GradientCardsSection() {
  return (
    <div className='Gradient'>
        <div className="SectionStyled">
            <div className="title-con">
              <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'}/>
            </div>
            <div className="gradient-cards-con">
               <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
               <GradientCard image={person2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
               <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
               <GradientCard image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
               <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
               <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
               <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
               <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
            </div>
            <div className="load">
                <CtaButton name={'View More'}/>
            </div>
        </div>
    </div>
  )
}

export default GradientCardsSection