import React, { useState , useEffect} from 'react';
import { useParams , Link } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
    
    let {id} = useParams();
    let [movie, setMovie] = useState(null);
    let [isLoading, setIsLoading] = useState(true);

    const apiKey = `08d2e5ceedc776df6f4d78f9b92e46e5`;

    useEffect(() => {
        getMovie();
    }, [id]);

    async function getMovie() {
        try {
            let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
            setMovie(data);
            setIsLoading(false);
        } catch (error) {
            console.log(`Error : ${error}`);
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950">
                <h2 className="text-2xl font-bold text-white">Loading...</h2>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gray-950 text-white py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
                    Back to Movies
                    </Link>
                
                <div className="flex flex-col md:flex-row gap-8 bg-gray-900 border border-gray-800 p-6 rounded-xl">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full md:w-80 rounded-lg object-cover shadow-lg"/>
                    <div className="flex-1">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{movie.title}</h1>
                        <p className= "text-yellow-400 text-lg font-bold mb-4">
                            ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                        </p>
                        <h3 className="text-xl font-semibold mb-2 text-gray-200">Storyline</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {movie.overview || 'No overview available.'}
                        </p>
                        <div className="border-t border-gray-800 pt-4 space-y-2 text-sm text-gray-300">
                            <p>
                                <span className="font-semibold text-white">Release Date:</span> {movie.release_date}
                            </p>
                            <p>
                                <span className="font-semibold text-white">Duration:</span> {movie.runtime} minutes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MovieDetails;