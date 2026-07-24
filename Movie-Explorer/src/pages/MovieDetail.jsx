import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./MovieDetail.css";

function MovieDetail() {
    const { id } = useParams()
    const [movie, SetMovie] = useState(null)

    useEffect(() => {
        async function getMovie() {
          const res = await fetch(`https://www.omdbapi.com/?apikey=9236f6af&i=${id}`)
          const data = await res.json();  
          SetMovie(data)
          console.log(data)
        }
        getMovie();
    }, [id])

    if(!movie) return <p>Loading...</p>

  return (
    <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p> 
		{/* <p><strong>Ratings:</strong> {movie.Ratings}</p>  */}
		<p><strong>Plot:</strong> {movie.Plot}</p>
		<p><strong>Awards:</strong> {movie.Awards}</p>
		<p><strong>Writer:</strong> {movie.Writer}</p>
		<p><strong>Language:</strong> {movie.Language}</p>
		<p><strong>BoxOffice:</strong> {movie.BoxOffice}</p>
	</div>
  )
}

export default MovieDetail