import { useContext, useState } from "react"
import { AppContext } from "../App"


export default function WordLength() {
  const { length, setLength } = useContext(AppContext)


  const handleOnChange = (e) => {
    setLength(e.target.value)

  }
  return (

    < div id={length} > <select className="w-14 bg-gray-400 rounded text-center text-lg" value={length} onChange={handleOnChange}>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    </div >
  )
}

