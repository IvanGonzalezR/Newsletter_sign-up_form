'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation';
import { useContext } from 'react'
import Context from '@/context/FormContext'

export default function useEmail(){

  const contexto: any = useContext(Context)

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  
  const verifyEmail = (): boolean => {    
    const email = inputRef.current?.value;
    contexto.setForm({email: email})

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

      // buttonRef.current?.removeAttribute('disabled')

      return true;
    } else {
      inputRef.current?.classList.add('bg-red-50');
      inputRef.current?.classList.add('border-red-600');
      buttonRef.current?.classList.remove('button-gradient');

      // buttonRef.current?.setAttribute('disabled', '')

      return false;
    }
  }
  
  const submitEmail = (evt: any): void => {
    evt.preventDefault();

    const isEmailVerified = verifyEmail();
    if(isEmailVerified) {
      console.log('success');
      router.push('/success')
    } else {
      console.log('verificadont');
    }
  }

  return {
    inputRef,
    buttonRef,
    submitEmail,
    verifyEmail
  }
}