import React from 'react';
import { } from 'react-router';
import MyNavLink from './MyNavLink';
import { RiHome2Line } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    const navLinks = [
        {
            path: '/',
            Icon: <RiHome2Line />,
            text: 'Home'
        },
        {
            path: '/timeline',
            Icon: <IoMdTime />,
            text: 'Timeline'
        },
        {
            path: '/stats',
            Icon: <ImStatsDots />,
            text: 'Stats'
        },
    ]
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="container mx-auto navbar">

                {/* Left side */}
                <div className="flex-1">
                    <h1 className='text-2xl font-bold text-[#1F2937]'>
                        Keen<span className='font-semibold text-[#244D3F]'>Keeper</span>
                    </h1>
                </div>

                {/* Mobile menu button */}
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost">
                            ☰
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {
                                navLinks.map((item, index) => (
                                    <li key={index}>
                                        <MyNavLink to={item.path}>
                                            {item.Icon} {item.text}
                                        </MyNavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Desktop menu */}
                <div className="flex-none hidden md:block">
                    <ul className="flex gap-4 items-center">
                        {
                            navLinks.map((item, index) => (
                                <MyNavLink key={index} to={item.path}>
                                    {item.Icon}{item.text}
                                </MyNavLink>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;