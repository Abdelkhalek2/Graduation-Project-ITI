import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';

function Search() {
    let [movies, setMovies] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');

    const apiKey = `08d2e5ceedc776df6f4d78f9b92e46e5`;

        useEffect(() => {
        if (searchTerm) {
            searchMovies();
        } else {
            setMovies([]);
        }
    }, [searchTerm]);


    async function searchMovies() {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`);
            setMovies(data.results);
        } catch (error) {
            console.log(`Error : ${error}`);
        }
    }
    return (
        <>
            <div className="min-h-screen bg-gray-950 py-10 px-4 text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Search Movies</h2>
                    <div className="flex gap-2 max-w-md mb-8">
                        <input type="text" placeholder="Search for a movie..." 
                        className="p-2 rounded bg-gray-800 text-white w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={searchMovies}>Search</button>
                    </div>
                    {movies.length === 0? (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                        <span className="text-6xl mb-4">🔍</span>
                        <h3 className="text-xl font-medium text-gray-300">Looking for your next movie?</h3>
                        <p className="text-sm text-gray-500 mt-1">Just type a movie title into the box above, and we'll take it from there.</p>
                        </div>
                        ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} id={movie.id} title={movie.title} poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} rating={movie.vote_average} />
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Search;