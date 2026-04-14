import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) =>`${isActive ? "text-white bg-[#244D3F] py-2 px-4 rounded flex gap-1 items-center" : 'flex gap-1 items-center'}`}>{children}</NavLink>
    );
};

export default MyNavLink;