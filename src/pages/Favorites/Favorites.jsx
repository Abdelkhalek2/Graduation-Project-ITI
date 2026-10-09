import React, {useContext } from 'react';
import {MovieContext} from '../../context/MovieContext';
import MovieCard from '../../components/MovieCard/MovieCard';
function Favorites() {
    let {favorites} = useContext(MovieContext);

    return (
        <>
            <div className="min-h-screen bg-gray-950 py-10 px-4 text-white">
                <div className= "max-w-7xl mx-auto">
                    <h2 className= "text-3xl font-bold mb-8 text-white text-center">
                        My Favorites ({favorites.length})
                    </h2>

                    {favorites.length === 0 ? (
                        <div className= "flex flex-col items-center justify-center py-20 text-gray-500">
                            <span className= "text-6xl mb-4">💔</span>
                            <h2 className= "text-3xl font-bold mb-8 border-blue-600 pl-4">No Favorite Movies</h2>
                            <p className= "text-xl">Click the heart icon on any movie to add it to your favorites.</p>
                        </div>
                    ) : (
                        <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                            {favorites.map((movie) => (
                                <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster || `https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.rating || movie.vote_average} movie={movie}  />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        
        </>
    );
}

export default Favorites;