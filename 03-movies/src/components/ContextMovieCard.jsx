import { MovieCard } from '../components/MovieCard.jsx';
import { get } from '../data/httppClient.jsx';
import { useEffect, useState } from 'react';

export default function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get('/discover/movie').then((data) => {
      // console.log('Fetched data:', data);
      setMovies(data.results || []); 
    }).catch((error) => {
      console.error('Error fetching movies:', error);
      setMovies([]); 
    });
  }, []);

  return (
    <div>
      {movies.length > 0 ? (
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] gap-10 p-10 justify-items-center items-start'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      ) : (
        <p className='text-center text-5xl'>No hay resultados</p>
      )}
    </div>
  );
}
