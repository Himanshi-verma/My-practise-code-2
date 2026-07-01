import React from 'react'
import Card from './components/card'



function App() {
  const jobs = [
  {
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    deadline: "5 days ago",
    position: "Frontend Developer",
    duration: "Part-time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mountain View, USA",
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    deadline: "2 days ago",
    position: "Software Engineer",
    duration: "Full-time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Redmond, USA",
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    deadline: "1 week ago",
    position: "UI/UX Designer",
    duration: "Internship",
    level: "Entry Level",
    salary: "$55/hr",
    location: "Cupertino, USA",
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    deadline: "3 days ago",
    position: "Backend Developer",
    duration: "Full-time",
    level: "Senior Level",
    salary: "$105/hr",
    location: "Seattle, USA",
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    deadline: "Today",
    position: "React Developer",
    duration: "Remote",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Menlo Park, USA",
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    deadline: "4 days ago",
    position: "DevOps Engineer",
    duration: "Contract",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Los Gatos, USA",
  },
  {
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    deadline: "6 days ago",
    position: "Product Designer",
    duration: "Hybrid",
    level: "Entry Level",
    salary: "$75/hr",
    location: "San Jose, USA",
  },
  {
    logo: "https://logo.clearbit.com/intel.com",
    company: "Intel",
    deadline: "Yesterday",
    position: "Data Analyst",
    duration: "Full-time",
    level: "Mid Level",
    salary: "$85/hr",
    location: "Santa Clara, USA",
  },
  {
    logo: "https://logo.clearbit.com/ibm.com",
    company: "IBM",
    deadline: "2 weeks ago",
    position: "Cloud Engineer",
    duration: "Part-time",
    level: "Senior Level",
    salary: "$90/hr",
    location: "New York, USA",
  },
  {
    logo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    deadline: "3 days ago",
    position: "Java Developer",
    duration: "Hybrid",
    level: "Mid Level",
    salary: "$88/hr",
    location: "Austin, USA",
  },
];
   console.log(jobs);
  return (
    <div className='parent'>

   {jobs.map(function(val){

    return <Card name={val.company} logo={val.logo} position={val.position} deadline={val.deadline} tag1={val.duration} tag2={val.level} pay={val.pay} location={val.location} 
    />
   })}
   
  
    
      
       
    </div>
  )
}

export default App