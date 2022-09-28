import React from 'react';
//import styled from 'styled-components';
import business from '../images/marketing.mp4';
import circles from '../images/circles.svg';
//import '../App.css';
import MainContent from './MainContent';

function MainArea(){
    return(
        <>
        <div className="vid">
          <video src={business} muted playsInline autoPlay loop></video>
          <img src={circles} alt="" className="overlay" />
        </div>
        <MainContent></MainContent>
        </>
    )
}
//const MainAreaStyled=styled.div;
export default MainArea;