import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact"/>
                <PageTop pagetitle="Contact" />
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;