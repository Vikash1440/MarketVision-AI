import axios from 'axios'
import React,{useEffect} from 'react'
import axiosInstance from '../../axiosinstance'

const Dashbord = () => {
    
    useEffect(()=>{
        const fetchprotectedData=async ()=>{
            try{
                const response=await axiosInstance.get('/protected-view/')
               console.log('Success:', response.data)
            }catch(error){
               console.error('Error fetching data:',error)
            }
        }
        fetchprotectedData();
    },[])
  return (
    <div>
      <h1 className='text-light'>dashbord</h1>
    </div>
  )
}

export default Dashbord
