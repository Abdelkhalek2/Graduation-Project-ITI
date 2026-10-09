import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <>
            <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 text-white">
                <h1 className= "text-8xl font-black text-blue-600 mb-4">404</h1>
                <h2 className= "text-3xl font-bold mb-2">page not found</h2>
                <p className= "text-gray-400 max-w-md mb-8 text-2xl text-center">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className= "inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors">
                    Go back to Home
                </Link>
            </div>
        </>
    );
}

export default NotFound;