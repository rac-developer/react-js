import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import user from "../assets/images/user.png";
import { 
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from 'react-icons/hi2';
import {
  HiDotsVertical,
  HiPlus,
} from "react-icons/hi"
import { HeaderItem } from './ui/HeaderItem';


export const Header = () => {


  const [toggle,setToggle] = useState(false);

  const menu=[
      {
      name:'HOME',
      icon:HiHome
      },
      {
      name:'SEARCH',
      icon:HiMagnifyingGlass
      },
      {
      name:"WATCH LIST",
      icon:HiPlus
      },
      {
      name:'ORIGINALS',
      icon:HiStar
      },
      {
      name:'MOVIES',
      icon:HiPlayCircle
      },
      {
      name:'SERIES',
      icon:HiTv
      }
  ];
  

  return (
    
    <>
        <div className='flex items-center justify-between p-5 sticky top-0 z-50 bg-[#0d1029]'>
          <div className='flex items-center gap-8'>
            {/* Logo */}
            <img src={logo} alt="logo" className='w-[80px] lg:w-[105px] object-cover p-2'/>

            {/* Barra */}
            <div className="hidden lg:flex gap-8">
              {menu.map((item) => (
                <HeaderItem key={item.name} name={item.name} Icon={item.icon}/>
              ))}
            </div>

            {/* Barra Responsive */}
            <div className="flex lg:hidden gap-5 items-center ">
              {menu.map((item,index) => index < 3 && (
                <HeaderItem key={item.name} name={''} Icon={item.icon}/>
              ))}
              <div className="relative">
                <div onClick={() => setToggle(!toggle)}>
                  <HeaderItem name={''} Icon={HiDotsVertical}/>
                </div>
                {toggle && (
                  <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 right-0 rounded-md flex flex-col gap-3'>
                    {menu.map((item,index) => index > 2 && (
                      <HeaderItem key={item.name} name={item.name} Icon={item.icon}/>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
          <img src={user} alt="user" className='w-[40px] rounded-full '/>
        </div>
    </>
  )
}
