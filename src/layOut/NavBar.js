import React, {useState} from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoMdHome, IoMdPerson, IoMdHeart, IoMdSettings } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavMenu = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;   font-size: 17px;
    background-color: lightblue;

    .Hamberger {
        display: none;
        font-size: 40px;    color: white;
        padding: 5px;
    }

    .Container {
        display: flex;
    }

    .Profile {
        display: flex;
    }

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;

        .Hamberger {
            display: block;
        }

        .Container {
            display: ${(props) => (props.clicked ? "flex" : "none")};
            flex-direction: column;
            width: 100%;
            background-color:lightblue;
            font-size: 25px;
        }

        .Profile {
            display: ${(props) => (props.clicked ? "flex" : "none")};
            flex-direction: column;
            width: 150px;
            height: 150px;
            border-radius: 100%;
        }
    }
`;

// fuck
function NavBar() {
    const menu = [
        { title: "Main", path: "/" },
        { title: "Profile", path: "../pages/Profile" },
        { title: "Like", path: "../pages/Like" },
        // { title : "message", path: "../pages/message" }, 
        { title: "Settings", path: "../pages/Settings" }
    ];

    const [ clicked, setClicked ] = useState(false);
    return (
        <>
            <NavMenu clicked = { clicked } setClicked = { setClicked }>
                <div className = "Hamberger" onClick = { () => {setClicked(!clicked)} }>
                    {/* you can switch icons by event more easily */}
                    <FontAwesomeIcon icon = { !clicked ? faBars : faTimes }/>
                </div>
                <div className = "Container">
                    <div className = "Profile"
                    src= { process.env.PUBLIC_URL + '/img/profile.jpg' } />
                    <p>choco the Jailed</p>
                    {menu.map((menu, index) => {
                        return (
                            <NavLink to={menu.path} key={index}
                                exact style={{ color: "gray", textDecoration: "none" }}
                                activeStyle={{ color: "white" }}>
                                <SideBarItem menu={menu} />
                            </NavLink>
                        );
                    })}
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
                    Main: <p><IoMdHome /> {menu.title}</p>,
                    Profile: <p><IoMdPerson /> {menu.title}</p>,
                    Like: <p><IoMdHeart /> {menu.title}</p>,
                    Settings: <p><IoMdSettings /> {menu.title}</p>
                }[currentMenu]
            }
        </div>
    )
}

export default NavBar;