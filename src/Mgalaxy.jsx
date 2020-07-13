import React from 'react';



function Mgalaxy(film){

    return(
        <>
        <div class="main_div">
           <div class="list">
               <img src={film.imgsrc} alt="My Pic" class="image" />
               <div class="movie_info">
                   <span class="category"> {film.title} </span>
                   <h3 class="movie_name"> {film.mname} </h3>
                   <a href={film.links} target="_blank" rel="noopener noreferrer">
                       <button> Watch Online </button>
                   </a>
                </div>
           </div>
        </div>


        </>
    );
}


export default Mgalaxy;