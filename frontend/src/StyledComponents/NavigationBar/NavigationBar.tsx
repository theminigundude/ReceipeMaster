import { Component } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap"
import './NavigationBarStyle.css';


export class NavigationBar extends Component {

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/">
              ReceipeMaster
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link href="/">Get Receipes</Nav.Link>
                <Nav.Link href="/addReceipe">Add Receipe</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}