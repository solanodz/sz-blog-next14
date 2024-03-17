"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = ({ item }) => {
    const pathName = usePathname()

    return (
        <Link href={item.path}>
            <p className={`${pathName === item.path ? 'bg-zinc-950 text-white font-semibold' : ''} p-1 px-2 text-white rounded-full hover:font-semibold hover:text-cyan-500 duration-300`}>
                {item.title}
            </p>
        </Link>
    )
}

export default NavLinks