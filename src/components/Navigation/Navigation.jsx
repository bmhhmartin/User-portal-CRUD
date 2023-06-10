import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/media.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
            <Navbar expand="sm">
                <Container>
                    <Navbar.Brand><Link to="/">User Portal</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                        <Nav>
                            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/post">Posts</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/photo">Photos</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navigation;
