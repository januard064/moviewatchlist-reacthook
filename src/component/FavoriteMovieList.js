import React from "react";

const FavortieMovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex m-2">
                    <div className="favorit">
                    <img src={movie.Poster} alt="movie" onClick={() => props.openDetail(movie.imdbID) }></img>
                    <div className="title">
                        <p>{movie.Title}</p>
                    </div>
                    </div>
                    
                    <div className="overlayFavorite">
                        
                        <button onClick={() => props.openDetail(movie.imdbID) } > Details </button>
                        <button onClick={() => props.handleFavouriteClick(movie)} > Remove </button>
                    </div> 
                </div>
            ))}
        </>
    )
}

export default FavortieMovieList;