"use client";

import Image from 'next/image'
import iconList from '../public/images/icon-list.svg'
import { useRef } from 'react';

export default function Home() {

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const verifyEmail = (): boolean => {
    const email = inputRef.current?.value;
    if(email === '') {
      inputRef.current?.classList.add('border-gray-300');
      inputRef.current?.classList.remove('bg-red-50');
      inputRef.current?.classList.remove('border-red-600');
    }
    const regex = /\S+@\S+\.\S+/;
    if(regex.test(email!)) {
      inputRef.current?.classList.remove('border-red-600');
      inputRef.current?.classList.remove('bg-red-50');
      inputRef.current?.classList.add('border-gray-300');
      inputRef.current?.classList.add('bg-gray-50');
      buttonRef.current?.classList.add('button-gradient');

      return true;
    } else {
      inputRef.current?.classList.add('bg-red-50');
      inputRef.current?.classList.add('border-red-600');
      buttonRef.current?.classList.remove('button-gradient');

      return false;
    }
  }

  const submitEmail = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const isEmailVerified = verifyEmail();
    if(isEmailVerified) {
      // TODO - Abrir modal 
      console.log('verificado');
    } else {
      console.log('verificadont');
    }
  }
  
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
        <form className='w-full h-auto flex flex-col space-y-4 px-6' onSubmit={submitEmail}>
          <div className='flex flex-col space-y-4'>
            <label className='font-bold'>Email Address</label>
            <input ref={inputRef} onChange={verifyEmail} type='text' placeholder='email@company.com' className='w-full h-12 rounded-md px-4 border border-gray-300 focus:outline-none'/>
            <button ref={buttonRef} className='w-full h-12 bg-dark_slate_grey rounded-md text-white font-bold'>Subscribe to monthly newsletter</button>
          </div>
        </form>
      </div>
    </main>
  )
}
