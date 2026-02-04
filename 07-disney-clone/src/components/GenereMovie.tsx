import GenereList from '../constant/GenereList'
import { MovieList } from './ui/MovieList'


export const GenereMovie = () => {
  return (
    <div>
      {GenereList.genere.map((genere, index) => index<=2 && (
        <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white 
                font-bold'>{genere.name}</h2> 
          <MovieList genereId={genere.id}/>
        </div>
      ))}
    </div>
  )
}