import React from 'react'

function InputField(props) {

  return (
    <div className='flex flex-col'>
      <label htmlFor="guessInput" className='text-center mt-5'>Guess the word</label>
      <input type="text" id="guessInput" onKeyDown={props.keyboard} onKeyUp={props.startTime} className='bg-slate-400 mt-1 h-10 rounded text-center text-xl' autoFocus />
    </div>
  )
}

export default InputField