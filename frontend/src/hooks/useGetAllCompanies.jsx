
import { setAllJobs } from '@/redux/jobSlice'
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setCompanies, setSingleCompany } from '@/redux/companySlice'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchCompanies = async ()=>{
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials: true});
            if(res.data.success){
                dispatch(setCompanies(res.data.companies))
            }
        } catch (error) {
            console.log("joberror",error)
        }
    }
    fetchCompanies();
  },[])
}

export default useGetAllCompanies
