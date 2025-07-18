import React, { useEffect } from 'react'
import Navbar from './ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousal from './CategoryCarousal'
import LatestJobs from './LatestJobs'
import Footer from './ui/shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store=> store.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(user?.role === 'recruiter'){
      navigate('/admin/companies');
    }
  },[]);
  return (
    <div className=''>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousal/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
