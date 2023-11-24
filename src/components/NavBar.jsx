"use client"
import React from 'react'
import NavItems from './NavItems'

export default function NavBar({title, param}) {
  return (
    <div className='flex space-x-3 justify-center p-4 bg-blue-50 lg:text-lg dark:bg-blue-200'>
        <NavItems title="Latest " param="fetchLastestNews"/>
        <NavItems title="All " param="fetchAllNews"/>
     
    </div>
  )
}
