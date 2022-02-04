import React, {useState} from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { IoMdHome, IoMdPerson, IoMdHeart, IoMdSettings } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal/Modal";
import { LogIn } from "./Modal/Component";

const NavMenu = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;   font-size: 18px;
    background-color: lightblue;

    .Hamberger {
        display: none;
        font-size: 40px;    color: white;
        padding: 5px;
        width: 1000px;
    }

    .UserName {
        display: none;
        font-size: 16px;
    }

    .Container {
        display: flex;
    }

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;

        .Hamberger {
            display: block;
        }

        .Container {
            display: ${(props) => (props.menuClicked ? "flex" : "none")};
            flex-direction: column;
            align-items: center;
            justify-content: center;
            left: 0px;  height: 500px;   width: 100%;
            background-color: skyblue;
        }

        .UserName {
            display: ${(props) => (props.menuClicked ? "flex" : "none")};
            flex-direction: column;
        }
    }
`;

const Profile = styled.img`
    display: none;
    width: 150px;   height: 150px;
    border-radius: 100%;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;

        display: ${(props) => (props.menuClicked ? "flex" : "none")};
        width: 150px;   height: 150px;
        border-radius: 100%;
    }
`;

// fuck
function NavBar() {

    const profileName = {title: "profile name", article: "choco the jailed"};
    const profileImg = {title: "profile img", path: "img/profile.jpg"};

    const menu = [
        { title: "Main", path: "/" },
        { title: "Profile", path: "../pages/Profile" },
        { title: "Like", path: "../pages/Like" },
        { title: "Settings", path: "../pages/Settings" }
        // { title: "Register", path: "../pages/Login" }
    ];

    const [ menuClicked, setMenuClicked ] = useState(false);
    const [ modalClick, setModalClick ] = useState(false);

    const modalOpen = () => { setModalClick(true); }
    const modalClose = () => { setModalClick(false); }
    return (
        <>
            <NavMenu menuClicked = { menuClicked } setMenuClicked = { setMenuClicked }>
                <div className = "Hamberger" onClick = { () => {setMenuClicked(!menuClicked)} }>
                    <FontAwesomeIcon icon = { !menuClicked ? faBars : faTimes }/>
                </div>
                <div className = "Container">
                    <Profile src = { profileImg.path }
                    menuClicked = { menuClicked } setMenuClicked = { setMenuClicked }/>
                    {/* src= { process.env.PUBLIC_URL + '/img/profile.jpg' } /> */}
                    <div className = "UserName">
                        { profileName.article }
                    </div>
                    {menu.map((menu, index) => {
                        return (
                            <>
                            <NavLink to = {menu.path} key={index}
                            exact style={{ color: "gray", textDecoration: "none" }}
                            activeStyle={{ color: "white" }}>
                                <SideBarItem menu={menu} />
                            </NavLink>
                            </>
                        );
                    })}
                    <div>
                        <p onClick = { modalOpen }>Register</p>
                        <div>
                            {modalClick && <Modal component = {<LogIn/>}
                            closePortal = { modalClose }/>}
                            <div id = "root-modal"></div>
                        </div>
                    </div>
                </div>
            </NavMenu>
        </> // head div
    );
}

function SideBarItem({ menu }) {
    var currentMenu = menu.title;
    return (
        <div>
            {
                {
                    Main: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Profile: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Like: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Settings: <p>&nbsp; {menu.title} &nbsp;&nbsp;</p>,
                }[currentMenu]
            }
        </div>
    )
}



export default NavBar;