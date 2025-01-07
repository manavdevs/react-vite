import './App.css'
import React,{useState} from 'react'
import ClickButton from './components/ClickButton';
import Counter from './components/Counter';
import Greetings from './components/Greetings'
import Header from './components/Header';

function App() {
  let marks=0;
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State for login status
  const [name,setName]=useState();
  function handleInputName(event){
    setName(event.target.value);
  }
    // Toggle login status
    function toggleLogin() {
      setIsLoggedIn(!isLoggedIn);
    }
    if (isLoggedIn) {
      return (
        <div className=' text-4xl'>
            <h1 className='font-bold text-4xl py-5 bg-orange-100 max-h-[500px] max-w-full'>Welcome back {name}</h1>
            <Header/>
            <Greetings name='Manav'/>
            <p className='flex justify-center items-center bg-orange-400' >This is a react app</p>
            <ClickButton/>
            <Counter/>
          <div className='bg-orange-700'>
            <button className='bg-black text-white font-bold py-2 px-4 rounded' onClick={toggleLogin}>Log out</button>
          </div>
        </div>
      );
    } else {
      return (
      <div className='py-10 text-4xl'>
          <h1 className='py-3'>Please log in to continue {name}</h1>
          <input type='Text' placeholder='Enter your name' onChange={handleInputName}>
          </input>
        <div>
          <button className='bg-black text-white font-bold py-2 px-4 rounded' onClick={toggleLogin}>Log in</button>
        </div>
      </div>
  )
}
}
export default App