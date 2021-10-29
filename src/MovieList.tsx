import React from "react";
//import ApiMovie from "./ApiMovie";

const MovieList = (props:any) =>{
    return(
        <>
        {props.movies.map((movie:any)=> <div>
            <img src={movie.title}/>
        </div>)}

        </>
    )
}

export default MovieList;