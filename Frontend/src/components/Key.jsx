import { useState, useContext } from "react"
import { AppContext } from "../App";

export default function Key({ keyVal, bigKey, wrongKey }) {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter()

    } else if (keyVal === "<---") {
      onDelete()

    } else {
      onSelectLetter(keyVal);

    }
  }
  if (bigKey) {
    return (
      <div className="m-1 w-20 h-12 bg-white rounded text-xl font-semibold flex justify-center place-items-center cursor-pointer" onClick={selectLetter}>{keyVal}</div>
    )
  } else if (wrongKey) {
    return (
      <div className="m-1 w-10 h-12 bg-gray-600 rounded text-xl font-semibold flex justify-center place-items-center cursor-pointer" onClick={selectLetter}>{keyVal}</div>
    )
  } else {
    return (
      <div className="m-1 w-10 h-12 bg-white rounded text-xl font-semibold flex justify-center place-items-center cursor-pointer" onClick={selectLetter}>{keyVal}</div>
    )
  }

}

