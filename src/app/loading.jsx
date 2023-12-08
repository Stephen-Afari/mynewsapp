import React from 'react'
// import {ReactComponent as Spinner} from '../../public/spinner.svg'

export default function Loading() {
  return (
    <div className="flex justify-center">
      {/* <Spinner/> */}
    <img className="h-96" src="../../public/spinner.svg" alt="loading..."/>
  </div>
  )
}
