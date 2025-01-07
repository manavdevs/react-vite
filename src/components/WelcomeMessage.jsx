import React, { useState } from 'react';

function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State for login status

  // Toggle login status
  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  // Conditional rendering using 'if' statement
  if (isLoggedIn) {
    return (
      <div className='py-10 text-4xl'>
        <h1 className='py-3'>Welcome back, User!</h1>
        <button className='bg-black text-white font-bold py-2 px-4 rounded' onClick={toggleLogin}>Log out</button>
      </div>
    );
  } else {
    return (
      <div className='py-10 text-4xl'>
        <h1 className='py-3'>Please log in to continue</h1>
        <button className='bg-black text-white font-bold py-2 px-4 rounded' onClick={toggleLogin}>Log in</button>
      </div>
    );
  }
}

export default WelcomeMessage;