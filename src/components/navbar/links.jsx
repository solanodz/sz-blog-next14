"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import NavLinks from "./NavLinks"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CgMenuRight } from "react-icons/cg";


const Links = () => {

    const [isOpen, setIsOpen] = useState(false)

    const links = [
        {
            title: 'BLOG',
            path: '/blog',
        },
        {
            title: 'LOGIN',
            path: '/login',
        },
        {
            title: 'REGISTER',
            path: '/register',
        },
        {
            title: 'ABOUT',
            path: '/about',
        }
    ]

    const session = true
    const isAdmin = true


    return (
        <div>
            <div className="hidden md:flex gap-3 items-center justify-center font-light ">
                {links.map((link) => (
                    <NavLinks item={link} key={link.title} />
                ))}{
                    session ? (
                        <>
                            {isAdmin && <NavLinks item={{ title: 'ADMIN', path: '/admin' }} />}
                            <Button variant='outline'>LOGOUT</Button>
                        </>
                    ) : (
                        <NavLinks item={{ title: 'Login', path: '/login' }} />
                    )

                }
            </div>

            <Sheet>
                <SheetTrigger className='md:hidden flex' onClick={() => setIsOpen(prev => !prev)}><CgMenuRight className="text-3xl" /></SheetTrigger>
                <SheetContent className='bg-zinc-950'>
                    <SheetHeader>
                        <SheetDescription>
                            {
                                isOpen && <div className="flex flex-col top-24 h-screen items-center  justify-center gap-4 text-lg">
                                    {links.map((link) => (
                                        <NavLinks item={link} key={link.title} />
                                    ))}
                                </div>
                            }
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>





            {/* <Button>Menu</Button> */}
        </div >
    )
}

export default Links