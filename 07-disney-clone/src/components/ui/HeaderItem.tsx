import type { ElementType } from 'react';

interface HeaderItemProsp {
    name: string;
    Icon: ElementType;
}

export const HeaderItem = ({name, Icon}: HeaderItemProsp) => {

    return (
        <div 
            className='flex text-white items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8'
        >
            <Icon size={20}/>
            <span>{name}</span>
        </div>

  )
}
