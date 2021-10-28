import React, { useState, useEffect } from "react";
import axios from "axios";


function ApiMovie() {
    const API_URL_UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?api_key=f6f6ccdecf4c60c8bb20d597133d740e&language=en-US&page=1';
    const API_URL_TOP_RATED_TV_SHOWS = 'https://api.themoviedb.org/3/tv/top_rated?api_key=f6f6ccdecf4c60c8bb20d597133d740e&language=en-US&page=1';
    const API_POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=f6f6ccdecf4c60c8bb20d597133d740e&language=en-US&page=1';
    const API_RATE_MOVIES = 'https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=f6f6ccdecf4c60c8bb20d597133d740e';

    const [movies, setMovies] =useState([]);
    const [rating, setRating] = useState([]);

    //usa datos hasta que se haya cargado el componente completamente

    //useEffect API_URL_UPCOMING
    useEffect(() =>{
        const fetchData = async () =>{
            const {data} = await axios.get(API_URL_UPCOMING);
            console.log(data);
          
            setMovies(data.results);
            
        };
        fetchData();
    },[]);

    //useEffect API_URL_TOP_RATED_TV_SHOWS
    useEffect(() =>{
        const fetchData = async () =>{
            const {data} = await axios.get(API_URL_TOP_RATED_TV_SHOWS);
            console.log(data);
          
            setRating(data.results);
            
        };
        fetchData();
    },[]);
    
    return (
        <div>
              {movies.map((movie:any)=>(
                  <div key={movie.id}>
                      <h1>{movie.title}</h1>
                      <p>{movie.description}</p>
                      <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} />
                      <p>Vote Average: {movie.vote_average}</p>
                      <p></p>
                  </div>
              ))}

              {rating.map((rate:any)=>(
                  <div key={rate.id}>
                      <h1>{rate.name}</h1>
                      <img src={'https://image.tmdb.org/t/p/w500' + rate.backdrop_path} />
                      <p>Vote Average: {rate.vote_average}</p>
                  </div>
                  
              ))}
              
        </div>

        

        
    )
}

export default ApiMovie