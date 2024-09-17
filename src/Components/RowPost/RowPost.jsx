import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
import LazyLoad, { lazyload } from 'react-lazyload'
function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
        axios.get(props.url).then((res)=>{
          setMovies(res.data.results)
        }).catch(err=>{
          // alert('network error')
        })
  },[])
   
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

 const handleMovies = (id)=>{
  console.log('request reaching');
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((res)=>{
      console.log(res.data);
      if(res.data.results.length !==0){
        setUrlId(res.data.results[0])  
      }
     
    })
  }

  return (
    <div className='row'>
      <h2 className="title">{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
        <LazyLoad key={obj.id} height={200} offset={100}>     
   <img onClick={()=>handleMovies(obj.id)} className={props.isSmall?'smallPoster':"poster"} src={`${imageUrl+obj.backdrop_path
   }`} alt="+" />
    </LazyLoad>
        )}
   
      </div>
      { urlId && <YouTube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default RowPost
