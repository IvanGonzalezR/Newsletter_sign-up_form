'use client'
import React from 'react'
import Image from 'next/image'
import iconList from '../../public/images/icon-list.svg'
import { useContext } from 'react'
import { useRouter } from 'next/navigation';
import Context from '@/context/FormContext'


export default function Page() {

  const contexto: any = useContext(Context)
  const router = useRouter()

  const handleClick = (evt) => {
    evt.preventDefault()

    router.push('/')
  }

  return (
    <main className='w-full h-full px-8 min-h-screen bg-white lg:flex lg:flex-row-reverse lg:px-8 lg:w-3/4 lg:h-3/4 lg:min-h-[34rem] lg:max-w-[25rem] lg:max-h-[20rem] lg:rounded-3xl lg:items-center'>      
      <div className='flex flex-col justify-between py-14 h-screen max-h-full lg:py-8 lg:max-w-full'>
        <div className='flex flex-col gap-8'>
          <Image src={iconList} width={60} height={60} alt='list' className='self-start'/>    
          <h1 className='text-5xl font-semibold'>Thanks for subscribing!</h1>  
          <p className='text-xl lg:text-base'>
            A confirmation email has been sent to <span className='font-bold'>{contexto.form.email}</span>. Please open it and click
            the button inside to confirm your subscription
          </p>
        </div>
        <div>
          <button onClick={handleClick} className='w-full h-12 bg-dark_slate_grey rounded-md text-white font-bold transition-all hover:scale-105'>Dismiss message</button>
        </div>
      </div>
    </main>
  )
}
