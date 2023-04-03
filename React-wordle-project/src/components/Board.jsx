
import { useContext } from "react";
import Letter from "./Letter";

import { AppContext } from "../App";


export default function Board() {

  const { length, setLength } = useContext(AppContext)

  function createBoard5(val) {
    return <div className="flex flex-row ">
      <Letter letterPos={0} attemptVal={val} />
      <Letter letterPos={1} attemptVal={val} />
      <Letter letterPos={2} attemptVal={val} />
      <Letter letterPos={3} attemptVal={val} />
      <Letter letterPos={4} attemptVal={val} />
    </div>
  }
  function createBoard6(val) {
    return <div className="flex flex-row ">
      <Letter letterPos={0} attemptVal={val} />
      <Letter letterPos={1} attemptVal={val} />
      <Letter letterPos={2} attemptVal={val} />
      <Letter letterPos={3} attemptVal={val} />
      <Letter letterPos={4} attemptVal={val} />
      <Letter letterPos={5} attemptVal={val} />
    </div>
  }
  function createBoard7(val) {
    return <div className="flex flex-row ">
      <Letter letterPos={0} attemptVal={val} />
      <Letter letterPos={1} attemptVal={val} />
      <Letter letterPos={2} attemptVal={val} />
      <Letter letterPos={3} attemptVal={val} />
      <Letter letterPos={4} attemptVal={val} />
      <Letter letterPos={5} attemptVal={val} />
      <Letter letterPos={6} attemptVal={val} />
    </div>
  }
  function createBoard8(val) {
    return <div className="flex flex-row ">
      <Letter letterPos={0} attemptVal={val} />
      <Letter letterPos={1} attemptVal={val} />
      <Letter letterPos={2} attemptVal={val} />
      <Letter letterPos={3} attemptVal={val} />
      <Letter letterPos={4} attemptVal={val} />
      <Letter letterPos={5} attemptVal={val} />
      <Letter letterPos={6} attemptVal={val} />
      <Letter letterPos={7} attemptVal={val} />
    </div>
  }
  function createBoard9(val) {
    return <div className="flex flex-row ">
      <Letter letterPos={0} attemptVal={val} />
      <Letter letterPos={1} attemptVal={val} />
      <Letter letterPos={2} attemptVal={val} />
      <Letter letterPos={3} attemptVal={val} />
      <Letter letterPos={4} attemptVal={val} />
      <Letter letterPos={5} attemptVal={val} />
      <Letter letterPos={6} attemptVal={val} />
      <Letter letterPos={7} attemptVal={val} />
      <Letter letterPos={8} attemptVal={val} />
    </div>
  }
  function createBoard10(val) {
    return <div className="flex flex-row ">
      <Letter letterPos={0} attemptVal={val} />
      <Letter letterPos={1} attemptVal={val} />
      <Letter letterPos={2} attemptVal={val} />
      <Letter letterPos={3} attemptVal={val} />
      <Letter letterPos={4} attemptVal={val} />
      <Letter letterPos={5} attemptVal={val} />
      <Letter letterPos={6} attemptVal={val} />
      <Letter letterPos={7} attemptVal={val} />
      <Letter letterPos={8} attemptVal={val} />
      <Letter letterPos={9} attemptVal={val} />
    </div>
  }
  if (length == 5) {
    return (
      <div className="board">
        {createBoard5(0)}
        {createBoard5(1)}
        {createBoard5(2)}
        {createBoard5(3)}
        {createBoard5(4)}
        {createBoard5(5)}

      </div>
    );
  } else if (length == 6) {
    return (
      <div className="board">
        {createBoard6(0)}
        {createBoard6(1)}
        {createBoard6(2)}
        {createBoard6(3)}
        {createBoard6(4)}
        {createBoard6(5)}

      </div>
    );
  } else if (length == 7) {
    return (
      <div className="board">
        {createBoard7(0)}
        {createBoard7(1)}
        {createBoard7(2)}
        {createBoard7(3)}
        {createBoard7(4)}
        {createBoard7(5)}

      </div>
    );
  } else if (length == 8) {
    return (
      <div className="board">
        {createBoard8(0)}
        {createBoard8(1)}
        {createBoard8(2)}
        {createBoard8(3)}
        {createBoard8(4)}
        {createBoard8(5)}

      </div>
    );
  } else if (length == 9) {
    return (
      <div className="board">
        {createBoard9(0)}
        {createBoard9(1)}
        {createBoard9(2)}
        {createBoard9(3)}
        {createBoard9(4)}
        {createBoard9(5)}

      </div>
    );
  } else if (length == 10) {
    return (
      <div className="board">
        {createBoard10(0)}
        {createBoard10(1)}
        {createBoard10(2)}
        {createBoard10(3)}
        {createBoard10(4)}
        {createBoard10(5)}

      </div>
    );
  }
}
