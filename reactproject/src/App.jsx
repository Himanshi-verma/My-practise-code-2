import React, { useState } from 'react'

function App() {
  var[a,b]= useState(69);
    return (
    <>
   
    <div className='main'></div>
    <h1>{a+1}</h1>
     </>
    
    
  )
}

export default App