'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import CreateBanner from '../../components/forms/CreateBanner'
const NewBanner = () => {
  const router = useRouter()

  const handleBack = () => {
    router.push('./');
  };
  return (
   <>
   <CreateBanner  onBack ={handleBack}/>
   
   </>
  )
}

export default NewBanner