import React from "react";

const MovieList = (props) => {
    if(props.movies.length == 0){
        return (
            <>
            <div className="col-12 empty">Find the movie you want...</div>
            <div className="col-12"><h6>Hot This Week</h6><hr/></div>
            {props.recomendation.map((recomen, index) => (
                 <div className="image-container d-flex m-3">
                      <img className="image" src={recomen.Poster} alt="movie" ></img>
                        <div className="overlay d-flex align-items-center justify-content-center">
                            <button onClick={() => props.openDetail(recomen.imdbID) }>Details</button>
                            <button onClick={() => props.handleFavouriteClick(recomen)}>Add to my list</button>
                        </div> 
                 </div>
            ))}
            </>
             )
    } else {
        return (
            <>
                {props.movies.map((movie, index) => (
                    <div className="image-container d-flex m-3">
                        <img className="image" src={movie.Poster} alt="movie" ></img>
                        <div  className="overlay d-flex align-items-center justify-content-center">
                            <button onClick={() => props.openDetail(movie.imdbID) }>Details</button>
                            <button onClick={() => props.handleFavouriteClick(movie)}>Add to my list</button>
                        </div> 
                    </div>
                ))}
            </>
        )
    }
  
}

export default MovieList;