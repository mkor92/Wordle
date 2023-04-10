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
      <div className="m-1 w-16 h-10 bg-white rounded text-lg font-semibold flex justify-center place-items-center cursor-pointer" onClick={selectLetter}>{keyVal}</div>
    )
  } else if (wrongKey) {
    return (
      <div className="m-1 w-8 h-10 bg-gray-600 rounded text-xl font-semibold flex justify-center place-items-center cursor-pointer" onClick={selectLetter}>{keyVal}</div>
    )
  } else {
    return (
      <div className="m-1 w-8 h-10 bg-white rounded text-lg font-semibold flex justify-center place-items-center cursor-pointer" onClick={selectLetter}>{keyVal}</div>
    )
  }

}

