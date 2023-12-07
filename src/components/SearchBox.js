'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBox() {
const [search, setSearch]= useState('')
const router = useRouter();

const handleSubmit = (e)=>{
e.preventDefault();
if(!search) return;
router.push(`/search/${search}`)
}
  return (
  <form className='flex mx-auto max-w-6xl justify-between px-5'
  onSubmit={handleSubmit}
  >
    <input type='text' placeholder='Search Keywords' className='w-full h-10 rounded-sm placholder-gray-500 outline-none bg-transparent flex-1' 
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    />
  <input type='submit'  disabled={!search} className='p-2 rounded-md mt-1 cursor-pointer'></input>
  </form>
  )
}
