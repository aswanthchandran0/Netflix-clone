import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'

import './Banner.css'
function Banner() {
  const [movie,setMovie] = useState()
  const BannerIndex = Math.floor(Math.random() *20)
   useEffect(()=>{
          axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            setMovie(res.data.results[BannerIndex])
          })
   },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}>
      <div className="content">
        <h1 className='movieTitle' >{movie?movie.title:''}</h1>
        <div className="banner-buttons">
            <button className='play-button'><i className="fa-solid fa-play"></i>  play</button>
            <button className='more-info'><i class="bi bi-info-circle"></i> More Info</button>
        </div>
        <h1 className='discription'>{movie?movie.overview:''}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}



export default Banner
