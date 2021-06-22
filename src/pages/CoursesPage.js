import React, {Component, Fragment} from 'react';
import Footer from "../components/Footer/Footer";
import AllCourses from "../components/AllCourses/AllCourses";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";

class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Courses" />
                <PageTop pagetitle="All Courses" />
                <AllCourses />
            <Footer />
            </Fragment>
        );
    }
}

export default CoursesPage;