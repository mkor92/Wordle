import { useContext, useState } from "react"
import { AppContext } from "../App"


export default function WordLength() {
  const { length, setLength } = useContext(AppContext)
  const { unique, setUnique } = useContext(AppContext)


  const handleOnChange = (e) => {
    setLength(e.target.value)

  }

  const handleUnique = () => {
    if (unique === false) {
      setUnique(true)
      setLength(length)
    } else {
      setUnique(false)
      setLength(length)
    }

  }
  return (

    < div id={length} className="" >

      <label htmlFor="uniqueLetters" className="mr-4 text-lg">Only use words with unique letters</label>
      <input type="checkbox" onChange={handleUnique} id="uniqueLetters" className="h-5 w-5  rounded shadow bg-green-600" />

      <div className="flex mt-2 mb-4">
        <p className="mr-4 text-lg">How many letters?</p>
        <select className="w-10 bg-gray-400 rounded text-center text-base shadow" value={length} onChange={handleOnChange}>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </div >
  )
}

