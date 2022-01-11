import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoMdHome, IoMdPerson, IoMdHeart, IoMdSettings } from "react-icons/io";

import myProfile from "./profile.jpg";

const Menu = styled.div`
    width: 170px;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    font-size: 25px;
`;

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-top : -300px;
`;

const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0px;  height: 100vh;   width: 250px;
    background-color:lightblue;
`;

// const ToggleBtn = styled.button`
//     position: sticky;
//     width: 30px; height: 100px;
//     border: none;
//     background-color: skyblue;
// `

// fuck
function SideBar(){
    const menu = [
        { title: "Main", path: "/" },
        { title: "Profile", path: "../pages/Profile"}, 
        { title: "Like", path: "../pages/Like" },
        // { title : "message", path: "../pages/message" }, 
        { title : "Settings", path: "../pages/Settings" }
    ];
    return(
        <>
        <Container>
        <Profile src={ myProfile }/>
        <p>choco the Jailed</p>
        <Menu>
            {menu.map((menu, index) => {
                return(
                    <NavLink to = { menu.path } key = { index } 
                    exact style = { {color: "gray", textDecoration: "none"} }
                    activeStyle = { {color: "white"} }>
                        <SideBarItem menu = { menu }/>
                    </NavLink>
                );
            })}
        </Menu>
        </Container>
        {/* <ToggleBtn/> */}
        </> // head div
    );
}

function SideBarItem({ menu }){
    var currentMenu = menu.title;
    return(
        <div>
            {
                {
                    Main : <p><IoMdHome/> { menu.title }</p>,
                    Profile : <p><IoMdPerson/> { menu.title }</p>,
                    Like : <p><IoMdHeart/> { menu.title }</p>,
                    Settings : <p><IoMdSettings/> { menu.title }</p>
                }[currentMenu]
            }
        </div>
    )
}

export default SideBar;