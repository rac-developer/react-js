/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function MovieCard({movie}) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="text-xl text-center list-none
    transition duration-500 hover:opacity-50 hover:-translate-y-7">
      <Link to={"/movie/"+movie.id} className="h-full flex flex-col items-center justify-center">
        <img 
          width={230} 
          height={345} 
          src={imgUrl}
          alt={movie.title}
          className="rounded-lg sm-auto sm:h-auto"
        />
        <div className="mt-4">
        {movie.title}
        </div>
      </Link>
    </li>
  )
}

