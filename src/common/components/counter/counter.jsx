import React, {useState} from "react";


export const Counter = () => {
  const [counter, setCounter] = useState(0)
  const error = () => {
    setCounter(counter + 1)
    if(counter === 5) throw new Error('out of range')
  }

  return(
    <div>
      <button onClick={error}>{counter}</button>
    </div>
  )
}