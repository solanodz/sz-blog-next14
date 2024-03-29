import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { getUser } from '@/lib/data'
import { format } from 'date-fns'
import { useReducedMotion } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'


const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data ⛔')
    }

    return res.json()
}

const PostUser = async ({ userId }) => {

    // const user = await getData(userId)

    const user = await getUser(userId)

    return (
        <div>
            <Badge variant='secondary' className=' ml-0 flex gap-2 py-1 w-fit items-center mr-auto relative'>
                <Image src={user.img ? iser.img : "/no-image.png"} alt='foto-perfil' width={100} height={100} quality={100} className="border-2 bg-black border-zinc-800 ring-1 ring-cyan-600  border-muted-foreground object-cover w-11 h-11 rounded-full" />
                <div className=''>
                    <p className='leading-tight text-xs sm:text-sm font-semibold'>{user.username}</p>
                    <span className='sm:text-xs text-[10px] font-light text-muted-foreground pr-2'>Member since {format(new Date(user.createdAt), 'MMMM d, yyyy.')}</span>
                </div>
            </Badge>
        </div>
    )
}

export default PostUser
