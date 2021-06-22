import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";

class PortFolioPage extends Component {
    render() {
        return (
            <Fragment>
              <TopNavigation title="PortFolio" />
                <PageTop pagetitle="Port folio" />
                <AllProjects />
                <Footer />
            </Fragment>
        );
    }
}

export default PortFolioPage;