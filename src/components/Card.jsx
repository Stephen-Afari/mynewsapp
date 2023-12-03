import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({result}) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
    <Link href={result.url}><Image className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity-200'  src={result.urlToImage} width={500} height={300} alt='Image is not available'
    placeholder='blur'
    blurDataURL='./spinner.svg'
    style={{
        maxWidth:"100%",
        height:"auto"
    }}
    /></Link>
    <p className='line-clamp-2 text-md' >
    {result.description}
    </p>
    <h2 className='truncate text-lg font-bold'>{result.title}</h2>
    <p className='flex item-center space-x-4'>
    <p>{result.source.id}</p>
    <p>{result.publishedAt}</p>
    </p>
  
        </div>
  )
}
//className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
