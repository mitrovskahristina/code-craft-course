import { Navbar, NavbarBrand, Nav, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import Logo from '../../assets/logo.svg'

import './index.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar-dark bd-navbar navbar-fixed-top header_custom'>
            <Container className="container-xxl">
                <NavbarBrand>
                    <NavLink to='/'>
                        <img src={Logo} />
                    </NavLink>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navigation_bar">
                        <NavLink to='/'>
                            Home
                        </NavLink>
                        <NavLink to='/about'>
                            About
                        </NavLink>
                        <NavLink to='/courses'>
                            Courses
                        </NavLink>
                        <NavLink to='/contact'>
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header