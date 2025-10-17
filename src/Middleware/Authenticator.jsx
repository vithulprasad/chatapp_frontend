import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { authenticate } from '../apis/apis'

function Authenticator() {
  const navigate = useNavigate()
     useEffect(()=>{
         checker()
     },[])

     const checker =async()=>{
      const res = await authenticate()
      if(res.data.status == true){
        navigate("/")
      }
     }
  
  return (
    <Outlet/>
  )
}

export default Authenticator