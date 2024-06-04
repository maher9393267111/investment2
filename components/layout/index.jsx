import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useAuth } from '@/functions/context'
import Loader from '../common/Loader'
import ScollTop, { ScrollToTop } from './scrollTop'
import { ScissorsIcon } from '@heroicons/react/outline'
export default function Layout({children ,dir}) {

const {pageLoading} = useAuth()



if(pageLoading) {
  return <Loader/>
}


  return (
    // mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
    <div className='  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' dir={dir}>

<Navbar/>


<div className='min-h-[80vh]'>
    {children}
</div>




<Footer/>
<ScrollToTop/>


    </div>
  )
}
