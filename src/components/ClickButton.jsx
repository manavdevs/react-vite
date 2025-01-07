import React,{useState} from 'react'


function ClickButton() {
    const [message,setMessage]=useState("");
    const [name,setName]=useState();
    const handClick=()=>{
      setMessage((prevMessage)=>(prevMessage ? "":"You have clicked"))
    }
    function handleInputName(event){
      setName(event.target.value);
    }
  return (
    <>
    <div className='py-10 bg-orange-500'>
    <input className="bg-orange-500 border-orange-500 rounded" type='Text'  onChange={handleInputName}>
    </input>
    <div className = 'flex justify-center items-center py-10'>
      <div>
      </div>   
    <button onClick={handClick} className=" bg-gradient-to-l from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded">
        Click Me {name}
    </button>
    </div>
    
    <p>{message}</p>
    </div>
    </>
  )
}

export default ClickButton;