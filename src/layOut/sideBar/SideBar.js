import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

// import profile from "./profile.jpg";

const NavBar = styled.div`
    background-color: yellow;
    height: 80px;   width: 100%;
    display: flex;
    justify-items: center;  align-times: center;
`

const Menu = styled.div`
    width: 150px;
    display: flex;
    margin-top: 40px;
    flex-direction: colums;
`;

const Profile = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0px;  height: 100vh;   width: 240px;
    background-color:lightblue;
`;

function SideBar(){
    const SideBarItem = [
        { title: "Home", path: "../page/main",
        icon: <BsIcons.BsFillHouseDoorFill/> },
        { title: "profile", path: "../page/profile",
        icon: <BsIcons.BsPersonBoundingBox/> }, 
        { title: "like", path: "../page/like" },
        // { title : "message", path: "../page/message" }, 
        // { title : "option", path: "../page/option" }
    ];
    return(
    <Container>
        {/* <Profile src = { profile }> chocoTheJailed</Profile> */}
        <Menu>
            {SideBarItem.map((item, index) => {
                return(
                <li key={index}>
                    <Link to = {item.path}>
                        { item.icon }
                        <span>{ item.title }</span>
                        <SideBarItem item = { item }>
                        </SideBarItem>
                    </Link>
                </li>);
            })}
        </Menu>
    </Container>);
}

export default SideBar;