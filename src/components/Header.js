import React from 'react';
import { Nav } from 'react-bootstrap';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return(
        <Container fluid className="header">
            <Navbar expand="lg" variant="light">
                <div className="prahLogo">
                    <Navbar.Brand href="/">praha</Navbar.Brand>
                        </div>    
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/items">Items</Nav.Link>
                                <Nav.Link href="/create">Add New Items</Nav.Link>
                                <Nav.Link href="#shoppingcart">Shopping Cart</Nav.Link>
                            </Nav>
                <Form inline className="searchBar">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </Container>
        
        

    );
}

export default Header;