import React from 'react'

const name='Shallu don'
function card() {
  return (
    <div>
        <div className='card'>
         <h1 className='heading'>Himanshi verma </h1>
         <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptate esse hic autem. Facilis, autem!</p>
        </div>
        <div className='name'>
             My sweet name is {name}
        </div>
    </div>
  )
}

export default card