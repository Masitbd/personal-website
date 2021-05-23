import React, {Component, Fragment} from 'react';
import {Navbar, NavDropdown, Nav} from "react-bootstrap";
import whiteLogo from "../../asset/image/navlogo.svg";
import blueLogo from "../../asset/image/navlogoScroll.svg";

class TopNavigation extends Component {

    constructor() {
        super();
        this.state={
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo],
            navBarBack: "navBackground"
        }
    }
    onScroll= () =>{
        if (window.scrollY> 100){
            this.setState({navBarTitle:'navTitleScroll', navBarLogo: [blueLogo], navBarBack:'navBackgroundScrool'});
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle', navBarLogo:[whiteLogo], navBarBack: 'navBackground'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg"  variant="dark">
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"><img src={this.state.navBarLogo} /> Murad Sarker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">HOME</Nav.Link>
                            <Nav.Link href="#deets">SERVICES</Nav.Link>
                            <Nav.Link href="#deets">COURSES</Nav.Link>
                            <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link href="#deets">CONTACT</Nav.Link>
                            <Nav.Link href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;