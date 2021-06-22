import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service" />
                <PageTop pagetitle="My Services" />
                <Services />
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ServicePage;