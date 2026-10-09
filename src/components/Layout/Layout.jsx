import React from 'react';
import Navbar from '../Navbar/Navbar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;