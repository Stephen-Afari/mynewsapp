import Link from 'next/link'
import React from 'react'

export default function MenuItem({address,Icon}) {
  return (
    <div>
        <Link className='mx-4 lg:mx-6 hover:text-blue-200' href={address}>
        <Icon className='sm:text-2xl mx-4' />
        
        </Link>
       
        </div>
  )
}
