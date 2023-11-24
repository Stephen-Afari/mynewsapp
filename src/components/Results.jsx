import React from 'react'

export default function Results({results}) {
  return (
    <div>
{results.map((result )=>(
<div key={result.url}>
{result.title}
</div>
))}
    </div>

  )
}
