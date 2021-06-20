import React, { Component, Fragment } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import whiteLogo from "../../asset/image/navlogo.svg";
import blueLogo from "../../asset/image/navlogoScroll.svg";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [whiteLogo],
      navvariant: "dark",
      navBarBack: "navBackground",
      navBarItem: "navItem",
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navvariant: "light",
        navBarTitle: "navTitleScroll",
        navBarLogo: [blueLogo],
        navBarBack: "navBackgroundScroll",
        navBarItem: "navItemScroll",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navvariant: "dark",
        navBarTitle: "navTitle",
        navBarLogo: [whiteLogo],
        navBarBack: "navBackground",
        navBarItem: "navItem",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <Navbar
          variant={this.state.navvariant}
          className={this.state.navBarBack}
          fixed="top"
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Brand className={this.state.navBarTitle} href="#home">
            <img src={this.state.navBarLogo} /> Murad Sarker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                HOME
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                SERVICES
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                COURSES
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                CONTACT
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
