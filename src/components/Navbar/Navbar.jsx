import React, {useContext, useState} from 'react';
import { NavLink ,Link } from 'react-router-dom';
import {MovieContext} from '../../context/MovieContext';

function Navbar() {
    let {favorites, addToFavorites} = useContext(MovieContext);
    let [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between h-16">
                    <div className="shrink-0">
                        <Link to="/"className="text-2xl font-bold text-white tracking-wide">
                        Movies Hub 🎬
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <NavLink className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors" to="/">
                        Home
                        </NavLink>
                        <NavLink className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors" to="/search">
                        Search
                        </NavLink>
                        <NavLink className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors" to="/favorites">
                            Favorites ({favorites.length})
                        </NavLink>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white text-2xl focus:outline-none"
                        >
                            {isOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
                </div>
                {isOpen && (
                    <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pt-2 pb-4 space-y-2">
                        <NavLink className="block text-gray-300 hover:text-blue-500  py-2 rounded-md text-base font-medium transition-colors" to="/" onClick={() => setIsOpen(false)}>
                        Home
                        </NavLink>
                        <NavLink className="block text-gray-300 hover:text-blue-500  py-2 rounded-md text-base font-medium transition-colors" to="/search" onClick={() => setIsOpen(false)}>
                            Search
                        </NavLink>
                        <NavLink className="block text-gray-300 hover:text-blue-500  py-2 rounded-md text-base font-medium transition-colors" to="/favorites" onClick={() => setIsOpen(false)}>
                            Favorites ({favorites.length})
                        </NavLink>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;