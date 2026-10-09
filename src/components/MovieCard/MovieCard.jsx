import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {MovieContext} from '../../context/MovieContext';

function MovieCard({ id, title, poster, rating, movie }) {
    let {favorites, addToFavorites} = useContext(MovieContext);
    let isFavorite = favorites.some((movie) => movie.id === id);

    return (
        <>
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm max-w-sm transition-transform hover:scale-105">
                <Link to={`/movie/${id}`}>
                <img className="rounded-t-lg w-full h-80 object-cover" src={poster} alt={title} />
                </Link>
                <div className="p-5 text-center">
                    <span className="inline-block bg-gray-900 border border-gray-600 text-yellow-400 text-sm font-bold px-3 py-1 rounded mb-3">
                    ⭐ {rating}
                    </span>
                    <Link to={`/movie/${id}`}>
                    <h5 className="mb-4 text-xl font-bold text-white truncate">{title}</h5>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Link to={`/movie/${id}`} className="inline-block w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors">
                            View Details
                        </Link>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-base transition-colors"
                            onClick={() => addToFavorites(movie || { id, title, poster, rating })}
                            title="Add to Favorites"
                        >
                            {isFavorite ? '❤️' : '🤍'}
                        </button> 
                    </div>
                </div>
            </div>

        </>
    );
}

export default MovieCard;