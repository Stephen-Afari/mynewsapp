import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//Function to replace / with -
function replaceSlash(ss){
    let myArr=[]
for(let i=0; i<ss.length; i++){
    let char = ss[i];
let newChar = char.replace("/","-")
    //console.log(newChar)
myArr.push(newChar)
}
let newSS = myArr.join('')
return newSS;
}

export default function Card({result}) {
// let myRes = result.url.slice(26);
// let myNewRes = replaceSlash(myRes)
// console.log(replaceSlash(myRes))
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
    <Link href={`${result?.url}`}>{result.urlToImage !== null ? (<Image className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity-200'  src={result.urlToImage} width={500} height={300} alt='Image is not available'
    placeholder='blur'
    blurDataURL='./spinner.svg'
    style={{
        maxWidth:"100%",
        height:"auto"
    }}
    />):(<p>No Image Available</p>)}</Link>
    <p className='line-clamp-2 text-md' >
    {result?.description}
    </p>
    <h2 className='truncate text-lg font-bold'>{result?.title}</h2>
    <div className=''>
    <p>{result.source.id === null ? "Page Not found": result.source.id }</p>
    <p>{result?.publishedAt}</p>
    </div>
  
        </div>
  )
}
//className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
