import React from 'react'
import {Bookmark} from 'lucide-react'

function card() {
  return (
    <div>
        <div className='card'>

       <div className='top'>
         <img src='https://tse2.mm.bing.net/th/id/OIP.qWOzHLmRCs0WdNB0VUL6TAHaHa?pid=Api&P=0&h=180' alt=''></img>
         <button>save <Bookmark size={15}/></button>
       </div>
       <div className='mid'>
         <h3>Amazon<span> 5 days ago</span></h3>
         <h2>Senior UI/UX Designer</h2>
        <div className='para'>
         <h4>Part-Time</h4>
         <h4>Senior Level</h4>
        </div>
       </div>
       <div className='bottom'> 
        <div>
         <h3>$120/hr</h3>
         <p>Mumbai, India</p>
        </div> 
        
         <button>Apply now</button>
       
        </div>
       </div>
    </div>
  )
}

export default card