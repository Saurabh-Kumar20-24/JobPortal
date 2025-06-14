import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'

// const randomJobs = [1,2,3,5,6,7,8,9]

const LatestJobs = () => {
  const {allJobs}  = useSelector(store=> store.job);
  return (
    <div className=' mx-10 my-28'>
      <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'> Latest & Top </span>Job Openings</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
        {
          allJobs.length <=0 ? <span>No job available</span> :  allJobs?.slice(0,6).map((job,idx)=> <LatestJobCards  key={job._id} job={job}/>)
        }
      </div>
    </div>
  )
}

export default LatestJobs
