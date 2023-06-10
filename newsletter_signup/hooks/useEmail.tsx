'use client'
import { useRef, useContext, useState } from 'react'
import { useRouter } from 'next/navigation';
import Context from '@/context/FormContext'

export default function useEmail(){

  const contexto: any = useContext(Context)

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [error, setError] = useState(null);

  const router = useRouter();
  
  const verifyEmail = (): boolean => {    
    const email = inputRef.current?.value;
    contexto.setForm({email: email})
    console.log(email);
    
    const regex = /\S+@\S+\.\S+/;

    if(email === '') {
      inputRef.current?.classList.add('border-gray-300');
      inputRef.current?.classList.remove('bg-red-50');
      inputRef.current?.classList.remove('border-red-600');

      setError('El email está vacío...')
    } else if(regex.test(email!)) {
      inputRef.current?.classList.remove('border-red-600');
      inputRef.current?.classList.remove('bg-red-50');
      inputRef.current?.classList.add('border-gray-300');
      inputRef.current?.classList.add('bg-gray-50');
      buttonRef.current?.classList.add('button-gradient');     
       
      setError(null);
      return true;
    } else {
      inputRef.current?.classList.add('bg-red-50');
      inputRef.current?.classList.add('border-red-600');
      buttonRef.current?.classList.remove('button-gradient');
      
      setError('Formato incorrecto de email')
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
    error,
    submitEmail,
    verifyEmail
  }
}