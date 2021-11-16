import React, {useEffect, useState} from 'react'

import './App.css'
import MovieList from './component/MovieList';
import SearchBox from './component/SearchBoc';
import AddFavorite from './component/AddFavorite';
import FavortieMovieList from './component/FavoriteMovieList';
import Details from './component/Details';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const [searchValue, setSearchValue] = useState('');
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


  useEffect( async () => { 
    const urlRecomendation = `http://www.omdbapi.com/?s=One Piece Film&apikey=37234941`
    const response = await fetch(urlRecomendation);

    const responseJson = await response.json();
    console.log(responseJson);
    if(responseJson.Search){
      setRecomendation(responseJson.Search)
    }
  }, []);


  useEffect(()=> {
    const movieFavorite = JSON.parse(
      localStorage.getItem('react-movie-app-favorite')
    );

    if(movieFavorite){
      setFavourite(movieFavorite);
    }
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
    const urlDetail = `http://www.omdbapi.com/?i=${id}&apikey=37234941`
    const response = await fetch(urlDetail);

    const responseDetailJson = await response.json();
    console.log('selected', responseDetailJson);
    if(responseDetailJson){
      setSelected(responseDetailJson)
    }
  }

  const closeDetail = () => {
   setSelected({})
  }




  return (
    <div className='container'>
      <div className="col-12" className="logo"><h1>OMDB MOVIES</h1></div>
      <div className="row content">
        <div className ="col-9 movielist">
         <h4>Movie List</h4>
          <SearchBox setSearchValue={setSearchValue}  />
          <div className="row searchmovielist">
            <MovieList movies={movies} recomendation={recomendation} favouriteComponent={AddFavorite} handleFavouriteClick={addFavouriteMovie} openDetail={openDetail} />
          </div>
        </div>
        
        <div className ="col-3 favorit">
          <div className="headwatchlist">
            <h5>My Watch List</h5>
          </div>
          <div className="row">
            <FavortieMovieList movies={favourite} handleFavouriteClick={RemoveFavoriteMovie}  openDetail={openDetail} />
          </div>
            </div>
        </div>
        {(typeof selected.Title != "undefined")? <Details selected={selected} closeDetail={closeDetail} /> : false }
    </div>
  
  );
};

export default App;
