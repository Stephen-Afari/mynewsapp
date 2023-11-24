import Image from 'next/image'

// import { Inter } from "next/font/google"
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
const API_KEY=process.env.API_KEY
import Results from '@/components/Results';
export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchLastestNews";
  const res = await fetch( `https://newsapi.org/v2/${genre ==='fetchLastestNews'? "top-headlines": "everything"}?sources=bbc-news&apiKey=${API_KEY}`,
  {next: {revalidate: 10000}})
  //const res = await fetch("https://newsapi.org/v2/everything?q=Apple&from=2023-11-22&sortBy=popularity&apiKey=16e6b385f4c7494eba068c68072937ca",{next: {revalidate: 10000}})

  const data = await res.json();
  const results = data.articles

  console.log(results)
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
    
  return (
  <div>
<Results results={results}/>
  </div>
  
  )
}
