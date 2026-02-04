import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { get } from '../data/httppClient.jsx';
import { getMovieImg } from '../utils/getMovielmg.jsx';

export default function MovieDetails() {
    const { movieId } = useParams(); 
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    
    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            // console.log(data)
            setGeneros(data.genres[0])
            // console.log(data.genres[0])
        })
    }, [movieId]);

    const imageUrl = getMovieImg(movie.poster_path, 500);

    return (
        <div
            className='flex flex-wrap justify-center p-10'
        >
            <img 
                src={imageUrl}
                alt={movie.title}
                className='rounded-lg'
            />
            <div className='text-1xl max-w-md m-4 h-auto width-4/5'>
                <p className='text-center text-3xl m-4'>
                    <strong>Título: </strong> {movie.title}
                </p>
                <p>
                    <strong>Género: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Descriptions: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}
