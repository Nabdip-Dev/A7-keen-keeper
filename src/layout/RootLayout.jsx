import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../conponents/share/Navbar';
import Footer from '../conponents/share/Footer';

const RootLayout = () => {
    return (

        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default RootLayout;