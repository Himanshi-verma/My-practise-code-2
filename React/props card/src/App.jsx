import React from 'react'
import Card from './components/card'



function App() {
  const jobs = [
  {
    logo: "https://tse3.mm.bing.net/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=Api&P=0&h=180",
    company: "Google",
    deadline: "5 days ago",
    position: "Frontend Developer",
    duration: "Part-time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mountain View, USA",
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.wAKg-Fwc3o_qIuGNQEk5lgHaFY?pid=Api&P=0&h=180",
    company: "Microsoft",
    deadline: "2 days ago",
    position: "Software Engineer",
    duration: "Full-time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Redmond, USA",
  },
  {
    logo: "https://tse4.mm.bing.net/th/id/OIP.JM19VAZ_Zne9RxsnEpUe5gHaHa?pid=Api&P=0&h=180",
    company: "Apple",
    deadline: "1 week ago",
    position: "UI/UX Designer",
    duration: "Internship",
    level: "Entry Level",
    salary: "$55/hr",
    location: "Cupertino, USA",
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.qWOzHLmRCs0WdNB0VUL6TAHaHa?pid=Api&P=0&h=180",
    company: "Amazon",
    deadline: "3 days ago",
    position: "Backend Developer",
    duration: "Full-time",
    level: "Senior Level",
    salary: "$105/hr",
    location: "Seattle, USA",
  },
  {
    logo: "https://tse3.mm.bing.net/th/id/OIP.zMUV7B749XG0H15ZaBO_LwHaHa?pid=Api&P=0&h=180",
    company: "Meta",
    deadline: "Today",
    position: "React Developer",
    duration: "Remote",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Menlo Park, USA",
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.LJ1xF1q8b17RBPTHscbX8AHaEK?pid=Api&P=0&h=180",
    company: "Netflix",
    deadline: "4 days ago",
    position: "DevOps Engineer",
    duration: "Contract",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Los Gatos, USA",
  },
  {
    logo: "https://tse1.mm.bing.net/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?pid=Api&P=0&h=180",
    company: "Adobe",
    deadline: "6 days ago",
    position: "Product Designer",
    duration: "Hybrid",
    level: "Entry Level",
    salary: "$75/hr",
    location: "San Jose, USA",
  },
  {
    logo: "https://tse4.mm.bing.net/th/id/OIP.TZu7Xxng5Wk_f95ZZZDafgHaHa?pid=Api&P=0&h=180",
    company: "Intel",
    deadline: "Yesterday",
    position: "Data Analyst",
    duration: "Full-time",
    level: "Mid Level",
    salary: "$85/hr",
    location: "Santa Clara, USA",
  },
  {
    logo: "https://tse3.mm.bing.net/th/id/OIP.A1i5ZLZ001ud7kVXtWVpYgHaEK?pid=Api&P=0&h=180",
    company: "IBM",
    deadline: "2 weeks ago",
    position: "Cloud Engineer",
    duration: "Part-time",
    level: "Senior Level",
    salary: "$90/hr",
    location: "New York, USA",
  },
  {
    logo: "https://tse1.mm.bing.net/th/id/OIP.rSQ9DtGcrL8O5zE3Q_wicAHaEK?pid=Api&P=0&h=180",
    company: "Oracle",
    deadline: "3 days ago",
    position: "Java Developer",
    duration: "Hybrid",
    level: "Mid Level",
    salary: "$88/hr",
    location: "Austin, USA",
  },
];
  //  console.log(jobs);
  return (
    <div className='parent'>

   {jobs.map(function(val,idx){
    console.log(idx)

    return <div key={idx}>
      <Card name={val.company} logo={val.logo} position={val.position} deadline={val.deadline} tag1={val.duration} tag2={val.level} pay={val.pay} location={val.location} 
    />
   </div>
    
    
    })}
   
  
    
      
       
    </div>
  )
}

export default App