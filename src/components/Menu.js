import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'


const Menu = ({child}) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="gradient-text font-weight-bold">Doni Wirawan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <li className="nav-item  gradient-hover active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item gradient-hover">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item gradient-hover">
                                <a className="nav-link" href="#project">Project</a>
                            </li>
                            <li className="nav-item gradient-hover">
                                <a className="nav-link" href="#certificate">Certificate</a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu
