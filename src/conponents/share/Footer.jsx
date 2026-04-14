import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1f4d3a] text-white px-6 py-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">

                {/* Brand */}
                <h2 className="text-3xl font-bold tracking-wide">
                    KeenKeeper
                </h2>

                {/* Tagline */}
                <p className="text-sm text-gray-200 max-w-md leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and
                    nurture the relationships that matter most.
                </p>

                {/* Social Links */}
                <div>
                    <p className="text-sm mb-3 text-gray-300">Social Links</p>

                    <div className="flex gap-4 justify-center">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="bg-white text-[#1f4d3a] p-3 rounded-full 
                            hover:scale-110 hover:bg-gray-100 transition duration-300"
                        >
                            <FaFacebookF size={14} />
                        </a>

                        <a
                            href="#"
                            aria-label="Twitter"
                            className="bg-white text-[#1f4d3a] p-3 rounded-full 
                            hover:scale-110 hover:bg-gray-100 transition duration-300"
                        >
                            <FaTwitter size={14} />
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="bg-white text-[#1f4d3a] p-3 rounded-full 
                            hover:scale-110 hover:bg-gray-100 transition duration-300"
                        >
                            <FaInstagram size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-white/20 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-300 max-w-6xl mx-auto">
                
                <p className="text-center md:text-left">
                    © 2026 KeenKeeper. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#" className="hover:text-white transition">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:text-white transition">
                        Cookies
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;