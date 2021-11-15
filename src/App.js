import React, {useEffect, useState} from 'react'

import './App.css'
import MovieList from './component/MovieList';
import MovieListHeading from './component/MovieListHeading';
import SearchBox from './component/SearchBoc';
import AddFavorite from './component/AddFavorite';
import FavortieMovieList from './component/FavoriteMovieList';
import RemoveFavorite from './component/RemoveFavorite';
import Popup from './component/Popup';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourite, setFavourite] = useState([]);
  const [selected, setSelected] = useState({});



  const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=37234941`
    const response = await fetch(url);

    const responsJson = await response.json();

    console.log(responsJson);
    if(responsJson.Search){
      setMovies(responsJson.Search)
    }
  };

  useEffect(() => { 
    getMoviesRequest(searchValue);
  }, [searchValue]);

  useEffect(()=> {
    const movieFavorite = JSON.parse(
      localStorage.getItem('react-movie-app-favorite')
    );

    setFavourite(movieFavorite)
  }, [])

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorite', JSON.stringify(items))
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteMovieList = [...favourite, movie]
    setFavourite(newFavouriteMovieList)
    saveToLocalStorage(newFavouriteMovieList)
  }

  const RemoveFavoriteMovie = (movie) => {
      const newFavoritList = favourite.filter(
        (favourite) => movie.imdbID !== favourite.imdbID
      );
      setFavourite(newFavoritList);
      saveToLocalStorage(newFavoritList);
  }




  const openDetail = async (id) => {
    const urlPopup = `http://www.omdbapi.com/?i=${id}&apikey=37234941`
    const response = await fetch(urlPopup);

    const responsePopupJson = await response.json();
    console.log('selected', responsePopupJson);
    if(responsePopupJson){
      setSelected(responsePopupJson)
    }
  }

  const closeDetail = () => {
   setSelected({})
  }




  return (
    <div className='container'>
      <div className="col-12" className="logo"><h1>OMDB MOVIES</h1></div>
      <div className="row">
        <div className ="col-9 kiri">
          <MovieListHeading heading="Movies"/>
          <SearchBox setSearchValue={setSearchValue}  />
          <div className="row">
            <MovieList movies={movies} favouriteComponent={AddFavorite} handleFavouriteClick={addFavouriteMovie} openDetail={openDetail} />
          </div>
        </div>
        
        <div className ="col-3 favorit">
          <div className="d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading="Favourite"/>
          </div>
          <div className="row">
            <FavortieMovieList movies={favourite} favouriteComponent={RemoveFavorite} handleFavouriteClick={RemoveFavoriteMovie}  openDetail={openDetail} />
          </div>
            </div>
        </div>
        {(typeof selected.Title != "undefined")? <Popup selected={selected} closeDetail={closeDetail} /> : false }
    </div>
  
  );
};

export default App;
