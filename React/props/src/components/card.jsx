import React from 'react'

function card(props) {
  // console.log(props.user , props.age)
  return (
    <div className='parent'>
        <img  src={props.img} alt=''></img>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
    </div>
  )
}

export default card