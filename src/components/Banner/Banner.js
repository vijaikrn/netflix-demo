import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../constants/constants'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
const [movie, setMovie] = useState()

    useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[1]);
        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
     })
    }, [])
    
    return (
        <div style={{backgroundImage:`URL(${movie? imageUrl+movie.backdrop_path:""})`}} className='banner'>

            <div className='content'>
            <h1 className="title">{movie ? movie.title ? movie.title : movie.name : ''}</h1>
                <div className='banner-buttons'>
                    <button className='button'>play</button>
                    <button className='button'>My List</button>

                </div>
                <h1 className='description'>{movie ? movie.overview: ""}</h1>

            </div>

<div className="fade-bottom"></div>



        </div>
    )
}

export default Banner