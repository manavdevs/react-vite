import React from 'react'

function Greetings(props) {
    const currentHour=new Date().getFullYear()

    let greetmessage;
    if (currentHour<12){
        greetmessage="Good Morning";
    }else if(currentHour<18){
        greetmessage="Good Afternoon";
    }else{
        greetmessage="Good Evenening";
    }
  return (
    <div className='font-bold text-4xl py-5 bg-orange-300 max-h-[500px] max-w-full'>{greetmessage} {props.name}!
    <div className='flex justify-center items-center py-10'>
        {currentHour}
    </div>
    </div>
  )
}

export default Greetings