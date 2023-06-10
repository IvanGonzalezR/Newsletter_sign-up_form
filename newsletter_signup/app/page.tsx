"use client";

import Image from 'next/image'
import iconList from '../public/images/icon-list.svg'
import Form from '../components/Form'

export default function Home() {
  
  return (
    <main className='w-full min-h-screen bg-white lg:flex lg:flex-row-reverse lg:px-6 lg:py-4 lg:w-3/4 lg:h-3/4 lg:min-h-[34rem] lg:max-w-[60rem] lg:max-h-[40rem] lg:rounded-3xl lg:items-center'>      
      <div className='w-full h-72 bg-mobileImage bg-cover rounded-b-xl lg:h-full lg:bg-desktopImage lg:rounded-t-3xl'></div>
      <div className='flex flex-col gap-y-4 lg:w-full lg:h-full lg:gap-0 lg:justify-around'>
        <div className='w-full h-auto px-6 flex flex-col space-y-4'>
          <h1 className='font-bold mt-8 lg:mt-0'>Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on.</p>
          <div className='flex space-x-4'>
            <Image src={iconList} width={20} height={20} alt='list' className='self-start'/>
            <p>Product discovery and building what sdasd asds matters.</p>
          </div>
          <div className='flex space-x-4'>
            <Image src={iconList} width={20} height={20} alt='list' className='self-start'/>
            <p>Measuring to ensure updates are a success.</p>
          </div>
          <div className='flex space-x-4'>
            <Image src={iconList} width={20} height={20} alt='list' className='self-start'/>
            <p>And much more!</p>
          </div>
        </div>      
        <Form />
      </div>
    </main>
  )
}
