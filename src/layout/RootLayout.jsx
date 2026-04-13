import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../conponents/share/Navbar';

const RootLayout = () => {
    return (

        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default RootLayout;