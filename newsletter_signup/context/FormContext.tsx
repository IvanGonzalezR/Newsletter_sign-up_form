'use client'
import React, { useState } from 'react'

const Context = React.createContext({})

export function FormContextProvider({ children }) {
  const [ form, setForm ] = useState({
    email: 'ivanG@gmail.com'
  })

  return (
    <Context.Provider value={{ form, setForm }}>
      {children}
    </Context.Provider>
  )
}

export default Context