import React from 'react'

export default function Letter(props) {
  const { length } = props


  function createLetter() {
    return (
      Array.from({ length: length }, (_, i) => <div key={i} className="h-7 w-7 sm:h-14 sm:w-14 bg-slate-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
      </div>)
    )
  }

  const createBoardLength = (num) => {
    return (
      <div className="flex flex-row">
        {createLetter(num)}
      </div>
    )
  }



  return (

    <div className="h-7 w-7 sm:h-14 sm:w-14 bg-slate-600 m-1 flex flex-col justify-center items-center text-1xl font-bold sm:text-4xl rounded">
    </div>



  )
}

