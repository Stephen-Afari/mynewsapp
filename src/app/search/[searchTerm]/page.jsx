import Results from '@/components/Results';
import React from 'react'

export default async function page({params}) {
const res = await fetch(`https://newsapi.org/v2/everything?q=${params.searchTerm}&from=2023-11-22&sortBy=popularity&apiKey=${process.env.API_KEY}`)
if(!res.ok){
    return new Error('Error fetching data')

}  
const data = await res.json();
const myResults = data.articles
//console.log(myResults)
return (
    <div>
        {myResults.length === 0 && (
            <h1>No results found</h1>
        )}
        {myResults && (<Results results={myResults}/>)}
        
{/* Hello
{results[0].title} */}
    </div>
  )
}
