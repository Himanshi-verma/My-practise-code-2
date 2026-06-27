import React from 'react'
import Card from './components/card'

function App() {
  return (
    <div className='father'>  
    
        <Card user='Jhon' age={18} img='https://tse3.mm.bing.net/th/id/OIP.o_Qi916FlohRm_fHXACMFQHaEK?pid=Api&P=0&h=180' />
        <Card user='Harris' age={38} img='https://images.unsplash.com/photo-1781813377841-a3a25348ed17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'/>
        <Card user='Henary' age={28} img='https://plus.unsplash.com/premium_photo-1764532087829-0f652beb1f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'/>
      
    
    </div>
    
  )
}

export default App