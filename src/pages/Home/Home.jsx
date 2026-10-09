import React, { useState , useEffect} from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import axios from 'axios';

function Home() {
    let [movies, setMovies] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    const apiKey = '08d2e5ceedc776df6f4d78f9b92e46e5';
    
    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {
        try {
            let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
            setMovies(data.results)
            setIsLoading(false)
        }catch (error) {
            console.log(`Error : ${error}`);
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gray-950 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-600 pl-4">Trending Movies</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                rating={movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;