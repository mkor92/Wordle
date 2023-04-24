import Guess from "./Guess"


export default function Board(props) {

  const { length, currentGuess } = props


  return (
    currentGuess.map((guess, i) => {

      return (
        <Guess currentGuess={guess} length={length} key={i} />
      )
    })

  )


}


