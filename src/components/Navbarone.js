import React, { Component } from "react";
import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
export default class Navbarone extends Component {
render () {
    return (
         <>
         <Navbar className="nvbg" expand="lg">
  <Navbar.Brand href="#home">HackerNoon</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

         </>
    )
}

}