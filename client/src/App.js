import React, { useEffect } from 'react';
import {io} from 'socket.io-client'

const App = () => {

  const Socket = io('http://localhost:3000');

  useEffect(()=>{
    Socket.on("connect" , ()=> console.log("connected" , Socket.id)); 
  })

  return (
    <div>
      <h1> socket.io tutorial </h1>
    </div>
  )
}

export default App
