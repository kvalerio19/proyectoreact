import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";




function ApiMovie() {
    const API_URL_UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?api_key=f6f6ccdecf4c60c8bb20d597133d740e&language=en-US&page=1';
    const API_URL_TOP_RATED_TV_SHOWS = 'https://api.themoviedb.org/3/tv/top_rated?api_key=f6f6ccdecf4c60c8bb20d597133d740e&language=en-US&page=1';
    const API_POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=f6f6ccdecf4c60c8bb20d597133d740e&language=en-US&page=1';
    const API_NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f6f6ccdecf4c60c8bb20d597133d740e&language=en-US&page=1';

    const [movies, setMovies] =useState([]);
    const [rating, setRating] = useState([]);
    const [popular, setPopular] = useState([]);
    const [play, setPlaying] = useState([]);

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

    //useEffect API_POPULAR_MOVIES
    useEffect(() =>{
        const fetchData = async () =>{
            const {data} = await axios.get(API_POPULAR_MOVIES);
            console.log(data);
          
            setPopular(data.results);
            
        };
        fetchData();
    },[]);

    //useEffect API_NOW_PLAYING
    useEffect(() =>{
        const fetchData = async () =>{
            const {data} = await axios.get(API_NOW_PLAYING);
            console.log(data);
          
            setPlaying(data.results);
            
        };
        fetchData();
    },[]);

    
    return (
        <div className='container'>
            <h3>UPCOMING MOVIES</h3>
              {movies.map((movie:any)=>(
                  <div className='cont' key={movie.id}>
                      <h4>{movie.title}</h4>
                      <p>{movie.description}</p>
                      <img className='image-order' src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} />
                      <p>Vote: {movie.vote_average}</p>
                      <p></p>
                    <button className='btn'>View</button>
                    <button className='btn'>Wish</button>
                      
                  </div>
              ))}
              <h3>TOP RATED TV SHOWS</h3>
              {rating.map((rate:any)=>(
                  <div  className='cont1' key={rate.id}>
                      <h4>{rate.name}</h4>
                      <img className='image-order' src={'https://image.tmdb.org/t/p/w500' + rate.backdrop_path} />
                      <p>Vote: {rate.vote_average}</p>
                      <button className='btn'>View</button>
                      <button className='btn'>Wish</button>
                  </div>
                  
              ))}
              <h3>POPULAR MOVIES</h3>
              {popular.map((populars:any)=>(
                  <div className='cont2' key={populars.id}>
                      <h4>{populars.title}</h4>
                      <img className='image-order' src={'https://image.tmdb.org/t/p/w500' + populars.backdrop_path} />
                      <p>Vote: {populars.vote_average}</p>
                      <button className='btn'>View</button>
                      <button className='btn'>Wish</button>
                  </div>
              ))}
              <h3>NOW PLAYING</h3>
              {play.map((plays:any)=>(
                  <div className='cont3' key={plays.id}>
                      <h4>{plays.title}</h4>
                      <img className='image-order' src={'https://image.tmdb.org/t/p/w500' + plays.backdrop_path} />
                      <p>Vote: {plays.vote_average}</p>
                      <button className='btn'>View</button>
                     <button className='btn'>Wish</button>
                  </div>
                  
              ))}

              
        </div>
        
    )


}


export default ApiMovie