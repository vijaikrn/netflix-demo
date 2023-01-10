import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url)
    .then(response=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  
  }, [])
  const opts={
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie = (id)=>{
console.log(id);
axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then(response=>{
  console.log(response.data);
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }
  else{console.log("trailer not available");}
})
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
{movies.map((obj)=>
<img onClick={()=>handleMovie(obj.id)}  className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
)}
      
        </div>
       { urlId && <Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default Rowpost