import React,{useState} from 'react'


function Counter() {
    const [count,setCount]=useState("0");
    const handleIncrement=()=>{
      setCount((prevCount)=>(prevCount +1))
    }
    const handleDecrement=()=>{
        setCount((prevCount)=>(prevCount -1))
      }
    const resets=()=>{
        setCount(0)
    }
  return (
    <>
    <div className="flex flex-col items-center gap-4 py-10 bg-orange-600">
        <p className="text-2xl font-bold">Count: {count}</p>
        <div className="flex gap-2">
          <button
            onClick={handleIncrement}
            className="bg-green-600 text-black font-bold py-2 px-4 rounded"
          >
            Counter Up
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Counter Down
          </button>
          <button
            onClick={resets}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Counter reset
          </button>
        </div>
      </div>
    </>
  )
}

export default Counter;