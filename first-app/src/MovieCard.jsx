import React from "react";

const MovieCard = ({ moviess }) => {
    return (
        <div className="movie">
            <div>
                <p>{moviess.Year}</p>
            </div>
            <div>
                <img src={moviess.Poster !== 'N/A' ? moviess.Poster : 'https://via.placeholder.com/400'} alt="Movie Poster" />
            </div>
            <div>
                <span>{moviess.Type}</span>
                <h3>{moviess.Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard;