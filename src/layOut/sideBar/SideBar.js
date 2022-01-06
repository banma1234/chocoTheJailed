import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import profile from "../../../img/profile.jpg";

const Container = styled.div`
    position: fixed;
    left: 0px;  height: 100%;   width: 240px;
    background-color:lightblue;
`
const Menu = styled.div`
    width: 150px;
    display: flex;
    margin-top: 40px;
    flex-direction: colums;
`
const Profile = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
`

function SideBar(){
    const items = [
        { label: "Home", path: "../page/main"}, { label: "profile", path: "../page/profile" }, 
        { label: "like", path: "../page/like" }
        //, { label : "message", path: "../page/message" }, 
        // { label : "option", path: "../page/option" }
    ];
    return(<Container>
        <Profile src = { profile }> 초더잴ㄷ</Profile>
        <Menu>
            {items.map((menu, index) => {
                return(
                    <Link to = {menu.path} key = {index}>
                        <SideBarItem menu = { menu }>
                        </SideBarItem>
                    </Link>);
            })}
        </Menu>
    </Container>);
}

function SideBarItem({ menu }){
    return(
        <div className = "sideBarItem">
            <p>{ menu.name }</p>
        </div>);
}

export default SideBar;