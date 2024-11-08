import { useState, useEffect } from "react";

useState

function Filmes() {
    const [watchedMovies, setWatchedMovies] = useState([]);
    const [watchLater, setWatchLater] = useState([]);


    useEffect(() => {
        const watched = JSON.parse(localStorage.getItem('watchedMovies')) || [];
        const later = JSON.parse(localStorage.getItem('watchLater')) || [];
        setWatchedMovies(watched);
        setWatchLater(later);
      }, []);

    return ( 
        <>
        <div className="p-10">
            <h1 className="text-3xl m-6 font-bold">Filmes para Ver Depois</h1>
            <div className="flex flex-row text-center justify-items-center items-start flex-shrink-0 relative">
                {watchLater.map((movie) => (
                <div key={movie.id} className="bg-gray-800 p-4 rounded">
                    <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-[130px] h-[200px] mt-3"
                    />
                    <p className="mt-2 font-semibold">{movie.title}</p>
                </div>
                ))}
            </div>

            <h1 className="text-3xl font-bold m-6 mt-10">Filmes Assistidos</h1>
            <div className="flex flex-row text-center justify-items-center items-start flex-shrink-0 relative">
                {watchedMovies.map((movie) => (
                <div key={movie.id} className="m-3 bg-gray-800 p-4 rounded">
                    <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-[130px] h-[200px] justify-items-center"
                    />
                    <p className="mt-2 font-semibold">{movie.title}</p>
                </div>
                ))}
            </div>
            </div>
        </>
     )
}

export default Filmes ;