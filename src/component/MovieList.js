import React from "react";

const MovieList = (props) => {
    const FavCom = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex m-3">
                    <img className="image" src={movie.Poster} alt="movie" onClick={() => props.openDetail(movie.imdbID) }></img>
                    <div onClick={() => props.handleFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <FavCom />
                    </div> 
                </div>
            ))}
        </>
    )
}

export default MovieList;