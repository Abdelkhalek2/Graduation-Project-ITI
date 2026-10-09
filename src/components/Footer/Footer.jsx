import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8 px-4 mt-auto">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-center">
                        <div className= "flex items-center gap-w text-white font-bold text-lg">
                            <span>Movies Hub 🎬</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link  className="hover:text-blue-500 transition-colors" to="/">
                                Home
                            </Link>
                            <Link  className="hover:text-blue-500 transition-colors" to="/Search">
                                Search
                            </Link>
                            <Link  className="hover:text-blue-500 transition-colors" to="/Favorites">
                                favorites
                            </Link>
                        </div>
                        <p className= "text-gray-500 text-xs">
                            &copy; {new Date().getFullYear()} Movies Hub. All rights reserved.
                        </p>
                    </div>
            </footer>
            
        </>
    );
}

export default Footer;