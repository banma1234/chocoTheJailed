import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const MainSection = styled.div`
  position: absolute;
  width: 85vw; height: 100vh;    left: 250px;  right: 250px;
  text-align: center;
`;

const SlideBtn = styled.button`
  width: 100px;  heigth: 100px;
  border-radious: 100%;
`

function Main(){
    return(
        <MainSection>
          <h1>Hello CtJ World!</h1>
            <Swiper className = "banner"
            spacebetween = { 50 }
            slidesPerView = { 1 }
            navigation
            pagination = { {clickable : true} }></Swiper>
        </MainSection>
    )
}

const nextBtn = () => {
  
}

const prevBtn = () => {

}

export default Main;