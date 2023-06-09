import './globals.css'
import { FormContextProvider } from '../context/FormContext'

export const metadata = {
  title: 'NewsLatter signup',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FormContextProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
        </head>
        <body className='bg-charcoal_grey h-full lg:h-screen  lg:flex lg:items-center lg:justify-center'>{children}</body>
      </html>
    </FormContextProvider>
  )
}
