import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import Link from 'next/link'

const PstItem = ({ id }) => {
    return (
        <div className="bg-[url('/foto-perfil.jpg')] bg-cover shadow-lg border border-zinc-700 ">
            <Link href={`/blog/${id}`} as='/blog/post'>
                <div className="flex flex-col">
                    {/* <Image src={'/foto-perfil.jpg'} alt='foto-perfil' width={100} height={100} quality={100} className=" object-cover w-full h-64" /> */}
                    <div className="bg-zinc-900 bg-opacity-30 p-4 my-auto items-center h-64 sm:h-96">
                        <h2 className=' drop-shadow-md font-bold text-4xl'>Post Title</h2>
                        <Badge variant='default' className='drop-shadow-md'>Category</Badge>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PstItem
