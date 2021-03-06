import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About" />
                <PageTop pagetitle="About Me" />
                <AboutDescription />
                <Footer />
            </Fragment>
        );
    }
}
export default AboutPage;