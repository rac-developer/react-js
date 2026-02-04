import { useEffect, useState, useRef } from 'react';
import GlobalApi from '../../services/GlobalApi'; 
import { MovieCard } from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

interface ApiResponse {
  data: {
    results: Movie[];
  };
}

interface MovieListProps {
  genereId: number;
}

export const MovieList = ({ genereId }: MovieListProps) => {

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getMovieByGenreId = () => {

      GlobalApi.getMovieByGenreId(genereId.toString()).then((resp: ApiResponse) => {
        setMovieList(resp.data.results);
      });
    };

    if (genereId) {
      getMovieByGenreId();
    }
  }, [genereId])

  const sliderRight = (element: HTMLDivElement | null) => {
    if (element) element.scrollLeft += 500;
  };
  const sliderLeft = (element: HTMLDivElement | null) => {
    if (element) element.scrollLeft -= 500;
  };

  return (
    <div className='relative'>
      {/* Flechas de navegación */}
      <IoChevronBackOutline
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer 
          hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2`}
      />
      
      <IoChevronForwardOutline
        onClick={() => sliderRight(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer 
          hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2`}
      />

      {/* Contenedor de las tarjetas */}
      <div 
        ref={elementRef} 
        className='flex overflow-x-auto scrollbar-hide scroll-smooth pt-4 px-3 pb-4 gap-1'
      >
        {movieList.map((item, index) => (
          index % 3 === 0 ? (
            <HrMovieCard key={item.id} movie={item}/>
          ) : (
            <MovieCard key={item.id} movie={item}/>
          )
        ))}
      </div>
    </div>
  );
};
