import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
           <Navbar sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Car Service</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link  href="#services">Services</Nav.Link>
                        <Nav.Link  href="#experts">Experts</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse> 
                </Container>
            </Navbar> 
            
        </>
    );
};

export default Header;