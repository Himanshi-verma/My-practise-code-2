import React from 'react'
import {Bookmark} from 'lucide-react'

function card(props) {
  // console.log(props.name)
  return (
    <div>
        <div className='card'>

       <div className='top'>
         <img src={props.logo} alt=''></img>
         <button>save <Bookmark size={15}/></button>
       </div>
       <div className='mid'>
         <h3>{props.name}<span> {props.deadline}</span></h3>
         <h2>{props.position}</h2>
        <div className='para'>
         <h4>{props.tag1}</h4>
         <h4>{props.tag2}</h4>
        </div>
       </div>
       <div className='bottom'> 
        <div>
         <h3>{props.pay}</h3>
         <p>{props.location}</p>
        </div> 
        
         <button>Apply now</button>
       
        </div>
       </div>
    </div>
  )
}

export default card