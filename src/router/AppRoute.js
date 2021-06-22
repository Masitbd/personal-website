import React, {Component, Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Services from "../components/Services/Services";
import PortFolioPage from "../pages/PortFolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import Courses from "../components/Courses/Courses";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/course" component={CoursesPage} />
                    <Route exact path="/portfolio" component={PortFolioPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;