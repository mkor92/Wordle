import { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../App";
import Key from "./Key";

export default function KeyBoard() {
  const { onDelete, onEnter, onSelectLetter, wrongLetters, startTime } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {

    if (event.key === "Enter") {

      onEnter()
    } else if (event.key === "Backspace") {

      onDelete()
    } else {
      keys1.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {

          onSelectLetter(key)
        }
      })
      keys2.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {

          onSelectLetter(key)
        }
      })
      keys3.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {

          onSelectLetter(key)
        }
      })
    }
  })
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)
    startTime;
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard])

  return (
    <div className="flex-col hidden sm:flex justify-center items-center mt-10" onKeyDown={handleKeyboard}>
      <div className="line1 flex justify-center">
        {keys1.map((key) => {
          return <Key keyVal={key} key={key} wrongKey={wrongLetters.includes(key)} />
        })}
      </div>
      <div className="line2 flex justify-center">
        {keys2.map((key) => {
          return <Key keyVal={key} key={key} wrongKey={wrongLetters.includes(key)} />
        })}
      </div>
      <div className="line3 flex justify-center">
        <Key keyVal={"ENTER"} bigKey={true} />
        {keys3.map((key) => {
          return <Key keyVal={key} key={key} wrongKey={wrongLetters.includes(key)} />
        })}
        <Key keyVal={"<---"} bigKey={true} />

      </div>
    </div>
  );
}
