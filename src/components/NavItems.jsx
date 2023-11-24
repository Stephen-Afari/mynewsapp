import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function NavItems({title, param}) {
const searchParams = useSearchParams();
const genre = searchParams.get('genre')
  return (
  <Link href={`/?genre=${param}` } className={`hover:text-blue-300 font-semibold  ${
    genre && genre === param && "underline underline-offset-20 decoration-4 decoration-blue-600 rounded-lg"
  }` }  >{title}
  </Link>
  )
}
