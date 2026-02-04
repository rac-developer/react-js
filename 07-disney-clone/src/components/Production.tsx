import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'

import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import starwarV from '../assets/videos/star-wars.mp4'
import nationalGeographicV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'

interface ProductionItem {
  id: number;
  name: string;
  image: string;
  video: string;
}

export const Production = () => {

  const productionList: ProductionItem[] = [
    {
      id:1,
      name: 'Disney',
      image:disney,
      video:disneyV
    },
    {
      id:2,
      name: 'Pixar',
      image:pixar,
      video:pixarV
    },
    {
      id:3,
      name: 'Marvel',
      image:marvel,
      video:marvelV
    },
    {
      id:4,
      name: 'Star Wars',
      image:starwar,
      video:starwarV
    },
    {
      id:5,
      name: 'National Geographic',
      image:nationalG,
      video:nationalGeographicV
    }
  ]

  return (
    <div className='flex flex-col md:flex-row gap-5 p-2 px-5 md:px-16 items-center justify-center'>
        {productionList.map((item)=>(
            <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 active:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-900'>
                <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 left-0 rounded-lg w-full h-full object-cover opacity-0 hover:opacity-50 active:opacity-50'/> 
                <img src={item.image} alt={`Logo de ${item.name}`} className='w-full z-[1] opacity-100' />
            </div>
        ))}
    </div>

  )
}
