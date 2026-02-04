const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

function HrMovieCard({ movie }: { movie: Movie }) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
      <img 
        src={IMAGE_BASE_URL+movie.backdrop_path} 
        className='w-[110px] md:w-[220px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer'
        alt={movie.title}
      />
      <h2 className='w-[110px] md:w-[250px] text-white mt-2'>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard