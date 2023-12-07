import React from 'react'
import MenuItem from './MenuItem'
import {AiOutlineHome} from 'react-icons/ai'
import { BsInfoSquare } from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { GiNewspaper } from "react-icons/gi";
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between mx-2 items-center max-w-6xl sm:mx-auto">
        <div className="flex">
        <MenuItem address ="/" Icon={AiOutlineHome}/>
        <MenuItem address ="/about" Icon={BsInfoSquare}/>
        </div>
        <div>
          <Link href="/">
          <h2 className=' bg-blue-100 sm:text-2xl font-bold py-1 px-2 rounded-lg my-4 dark:bg-blue-200'>
            <span className='mr-1'>Auth</span>
            <span>News</span>
          </h2>
          </Link>
        </div>
       
      <div className='flex space-x-5 items-center'>
      <div className=''>
        <DarkModeSwitch/>
       </div>
       <GiNewspaper className='hover:text-blue-200' size={40}/>
      
      </div>
        

    </div>
    
  )
}


