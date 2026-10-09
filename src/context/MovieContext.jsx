import React,{createContext , useState} from 'react';

export const MovieContext = createContext();

function MovieProvider({children}) {
    let [favorites, setFavorites] = useState([]);

    function addToFavorites(movie) {
        
        if (!movie || !movie.id) return;

        const exists = favorites.find((item) => item.id === movie.id);
        if (!exists) {
            setFavorites([...favorites, movie]);
        } else {
            setFavorites(favorites.filter((item) => item.id !== movie.id));
        }
    }
    return (
        <>
        <MovieContext.Provider value={{favorites, addToFavorites}}>
            {children}
        </MovieContext.Provider>
            
        </>
    );
}

export default MovieProvider;