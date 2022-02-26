import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

import Modal from "./modal/Modal";
import LogIn from "./modal/LogIn";

function NavBar(){
    const [ modalClick, setModalClick ] = useState(false);

    const modalOpen = () => { setModalClick(true); }
    const modalClose = () => { setModalClick(false); }

    return(
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" fixed = "top">
        <Container>
        <Navbar.Brand id = "brand">
            <Link href = "/">
                <a id = "link">Choco the Jailed</a>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link href = "/about">
                    <a id = "link">about</a>
                </Link>
                <Link href = "/gallery">
                    <a id = "link">gallery</a>
                </Link>
                <Link href = "/about">
                    <a id = "link">settings</a>
                </Link>
                <Nav.Link href="/" disabled></Nav.Link>
            </Nav>
            <hr/>
            <Nav>
                <p id = "link" onClick = { modalOpen }>Register</p>
                <div>
                    {modalClick && <Modal component = {<LogIn/>}
                    closePortal = { modalClose }
                    selector = "#portal"/>}
                </div>
                <Link href = "/Profile">
                    <a id = "link">Profile</a>
                </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;