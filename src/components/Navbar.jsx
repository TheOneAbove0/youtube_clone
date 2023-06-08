import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/utils/assets/logo.png'
import SearchFeed from './SearchFeed';


export default function Navbar() {
  return (
    <div className=' sticky top-0 p-2 items-center justify-between bg-[#000] flex  '>
      <Link to='/' >
        <div className=' flex items-center '>
      <img src={logo} className=' w-12  ' alt="youtube-icon" />
      <div className='relative flex'>
      <span className='text-white   text-[24px] font-semibold '>Youtube</span>
      <span className=' text-white text-[12px]  ' >NP</span>
      </div>
      
      </div>
      </Link>
      <SearchFeed />

    </div>
  )
}
