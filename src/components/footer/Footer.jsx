import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='border-t border-zinc-800'>
            <div className=' flex justify-between items-center mt-3'>
                <h2 className='text-muted-foreground flex items-center'>Designed and developed by
                    <Link href={'https://sz-dev-portfolio.vercel.app/'} target='_blank' className='font-semibold text-white ml-1 hover:mr-2 duration-200'
                    >@solanodz
                    </Link>
                    <FaArrowRight className='text-white ml-2' />
                </h2>
                <div className='flex text-3xl gap-6 '>
                    <Link href={'https://github.com/solanodz'} target='_blank' className='hover:scale-125 duration-200'>
                        <FaGithub />
                    </Link>
                    <Link href={'https://linkedin.com/in/solanodz'} target='_blank' className='hover:scale-125 duration-200'>
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
