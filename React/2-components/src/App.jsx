import React from 'react'
import Card from './components/card'


const user='Himanshi'
function App() {
  return (
    <div>
      <div className='user'>
        All  about {user}
      </div>

       <div>
        <Card/>
      </div>
    </div>   
  )
}

export default App