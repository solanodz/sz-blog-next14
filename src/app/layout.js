import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white dark`}>
        <Navbar />
        <div className='max-w-8xl mt-16 p-6 mx-auto min-h-[100vh] flex flex-col justify-between'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}