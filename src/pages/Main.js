import React from 'react';

import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { NavLink } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay])

const MainSection = styled.div`
  position: relative;
  width: 85vw; height: 100vh;    left: 250px;  right: 250px;
  text-align: center;
  align-items: center;
`;

const swiperStyle = {
  position: "relative",
  width: "60%",  height: "700px"
};

const SlideImg = [
  { title: "slide_1", path: "img/slide_1.png" },
  { title: "slide_2", path: "img/slide_2.png" },
  { title: "slide_3", path: "img/slide_3.png" }
];

const CardsViewIcon = styled.div`
  position: absolute;
  width: 100%; height: 100px;
  margin-top: 30px;
  font-size: 70px;  text-decoration: none;
`

SwiperCore.use([Navigation, Pagination, Autoplay])

function Main(){
    return(
        <MainSection>
          <h1>Hello CtJ World!</h1>
          <Swiper style = {swiperStyle}
            spacebetween = { 50 }
            slidesPerView = { 1 }
            navigation
            loop
            autoplay = { {delay : 3000} }
            pagination = { {clickable : true} }>
            {SlideImg.map((index) => <SwiperSlide>
              <img src = { index.path } alt = { index.title }></img></SwiperSlide>)}
          </Swiper>
          <hr/>
          <CardsViewIcon>
            <NavLink to = "pages/Cards" exact style = { {color: "gray"} }>
              <IoGridOutline/>
            </NavLink>
          </CardsViewIcon>
          <p>click here to view more items</p>
        </MainSection>
    )
}

export default Main;