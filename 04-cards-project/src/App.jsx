import { Bookmark } from 'lucide-react'
import Card from './components/Card'



const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Singapore",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$62/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    companyName: "Salesforce",
    datePosted: "10 days ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://i0.wp.com/bevseay.com/wp-content/uploads/2017/01/IBM-logo-3000px.jpg?resize=1011%2C669&ssl=1",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "Cloud Engineering Intern",
    tag1: "Part Time",
    tag2: "Internship",
    pay: "$25/hr",
    location: "Kolkata, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    companyName: "Uber",
    datePosted: "10 weeks ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=intel.com&sz=128",
    companyName: "Intel",
    datePosted: "2 weeks ago",
    post: "Hardware Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=cisco.com&sz=128",
    companyName: "Cisco",
    datePosted: "9 days ago",
    post: "Network Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    companyName: "Spotify",
    datePosted: "5 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "New York, USA",
  },
];


console.log(jobOpenings)
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card logo ={elem.brandLogo} company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} date={elem.datePosted} pay={elem.pay} location={elem.location}/>
        </div>
      })}
      
    </div>
  )
}

export default App
