import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=40357fb4';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState("");
    const searchMovies = async (title) => {
        const response = await fetch(`${apiURL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('avengers');
    }, [])
    return (
        <div className="app">
            <h1>MOVIES APP</h1>
            <div className="search">
                <input type="text" name="search" id="searchMovie" placeholder="Search for a Movie"
                    value={searchMovie}
                    onChange={(e) => { setSearchMovie(e.target.value) }}
                    onKeyDown={(e) => { if (e.key === "Enter") { searchMovies(searchMovie) } }}
                />
                <img src={SearchIcon} alt="searchIcon" onClick={() => { searchMovies(searchMovie) }} />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies?.map((m, i) => {
                                return (<MovieCard moviess={m} key={i} />)
                            })
                        }
                    </div>
                )
                : (
                    <div className="empty">
                        <h2>No movies found!</h2>
                    </div>
                )}
        </div>

    );
}

export default App;