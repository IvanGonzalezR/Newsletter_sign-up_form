import React, { useEffect } from 'react'
import useEmail from '../../hooks/useEmail'

const Form = () => {

  const { inputRef, buttonRef, error, verifyEmail, submitEmail } = useEmail();

  useEffect(() => {
    verifyEmail();
    // console.log(error);
    
  },[error])

  return (
    <form className='w-full h-auto flex flex-col space-y-4 px-6' onSubmit={submitEmail}>
      <div className='flex flex-col space-y-4'>
        <label className='font-bold mb-4'>Email Address</label>
        { error?.length && <p className='text-orange-600 absolute translate-y-4'>{error}</p>}
        <input ref={inputRef} onChange={verifyEmail} type='text' placeholder='email@company.com' className='w-full h-12 rounded-md px-4 border border-gray-300 focus:outline-none transition-all hover:border-orange-600'/>        
        <button ref={buttonRef} onClickCapture={submitEmail} className='w-full h-12 bg-dark_slate_grey rounded-md text-white font-bold hover:scale-105 transition-all'>
          Subscribe to monthly newsletter
        </button>    
      </div>
    </form>
  )
}

export default Form