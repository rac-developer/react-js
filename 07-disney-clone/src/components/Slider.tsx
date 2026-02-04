import { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

export const Slider = () => {

    const[movieList, setMovieList]= useState<Movie[]>([]);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () =>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results);
        })
    };

    const sliderRight = (element: HTMLDivElement | null) => {
        if (element) element.scrollLeft += 1280;
    };
    const sliderLeft = (element: HTMLDivElement | null) => {
        if (element) element.scrollLeft -= 1280;
    };

  return (
    <div className='relative'>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer z-10' onClick={() => sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0 z-10' onClick={() => sliderRight(elementRef.current)}/>
        
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
            {movieList.map((movie: Movie) => (
                <img
                    key={movie.id}
                    src={IMAGE_BASE_URL+movie.poster_path}
                    alt={movie.title}
                    className='min-w-full md:h-[500px] object-cover rounded-md mr-5 hover:border-[4px] border-gray-400 transition-all duration-400 cursor-pointer ease-in object-center'/>
            ))}
        </div>
    </div>
  )
}
