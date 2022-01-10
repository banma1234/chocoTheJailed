import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import * as BsIcons from "react-icons/bs";

import myProfile from "./profile.jpg";

const Menu = styled.div`
    width: 150px;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    font-size: 25px;
`;

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0px;  height: 100vh;   width: 250px;
    background-color:lightblue;
`;

function SideBar(){
    const menu = [
        { title: "Main", path: "/" },
        { title: "Profile", path: "/Profile"}, 
        { title: "Like", path: "/Like" },
        // { title : "message", path: "../page/message" }, 
        // { title : "option", path: "../page/option" }
    ];
    return(
    <Container>
        <Profile src={ myProfile }></Profile>
        <Menu>
            {menu.map((menu, index) => {
                return(
                    <NavLink exact style = { {color: "gray", textDecoration: "none"} }
                    to = { menu.path } key = { index } 
                    activeStyle = { {color: "white"} }>
                        <SideBarItem menu = { menu }/>
                    </NavLink>
                );
            })}
        </Menu>
    </Container>);
}

function SideBarItem({ menu }){
    return(
        <div className = "sideBar-item">
            <p>{ menu.title }</p>
        </div>
        );
}

export default SideBar;