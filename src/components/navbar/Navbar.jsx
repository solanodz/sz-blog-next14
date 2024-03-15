
import React from 'react'
import Links from './links'
// import Image from 'next/image'
import { montserrat, rock } from '../../ui/fonts'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex bg-black z-50 justify-between items-center p-3 px-12 text-white  fixed top-0 left-0 right-0'>
            <div>
                <Link href='/'>
                    <Image src='/sz-blanco.png' alt='logo' width={40} height={40} />
                    {/* <p className={`${rock.className} text-3xl px-3 antialiased tracking-tighter`}>SZ.blog</p> */}
                </Link>
            </div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar
