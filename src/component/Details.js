import React from "react";

const Details = ({ selected, closeDetail }) => {
    return(
        <div className="detail">
        
            <div className="row">
                <div className="col-2 offset-10 close">
                    <p className="" onClick={closeDetail}>x</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="imagedetail">
                        <img src={selected.Poster} alt="movie"/>
                        <p>Genre : {selected.Genre}</p>
                        <div className="row ratings">
                            <div className="col-12 col-md-6">
                                <img className="icon" src="https://img.icons8.com/color/48/000000/imdb.png"/> 
                                <span> {selected.imdbRating}</span>
                            </div>
                            <div className="col-12 col-md-6">
                            <img className="icontime" src="https://img.icons8.com/external-victoruler-flat-gradient-victoruler/50/000000/external-time-food-and-delivery-victoruler-flat-gradient-victoruler.png"/>
                                <span className="time"> {selected.Runtime}</span>
                            </div>
                        </div>
                        
                      
                    </div>
                </div>
                <div className="col-8">
                    <div className="moviedetail">
                    <h4>{selected.Title} - ({selected.Year})</h4>

                        <h6>Plot :</h6>
                        <p className="plot">{selected.Plot}</p>
                        
                        <h6>Directed by : </h6>
                        <p>{selected.Director}</p>

                        <h6>Actors :</h6>
                        <p>{selected.Actors}</p>

                        <h6>Writers :</h6>
                        <p>{selected.Writer}</p>

                        <h6>Released : </h6>  
                        <p>{selected.Released} at {selected.Country}</p>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;