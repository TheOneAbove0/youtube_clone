import React from 'react';
import { categories } from '../components/utils/constants';



export default function SideBar({setSelectedCategory, selectedCategory}) {

  
  return (
    <div className='h-[800px] overflow-x-hidden '>
        {
            categories.map(category =>(
            <div onClick={()=>{setSelectedCategory(category.name)}} key={category.name} className=" flex text-[20px] hover:bg-[#FC1503] justify-start hover:text-white rounded-[40px]  cursor-pointer bg-transparent py-[6px] my-[10px] px-3 mx-[15px] group  gap-2 items-center h-auto transition-all ease-out text-white">
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </div>
            ))
        }
    </div>
  )
}
