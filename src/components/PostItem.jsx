import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import Link from 'next/link'

const PstItem = ({ post }) => {
    return (
        <div className={`bg-black shadow-lg border border-zinc-700`}>
            <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col">
                    {post.img ? <div>
                        <Image src={post.img} alt='fotooo' width={900} height={100} quality={100} className="border-b opacity-40 hover:opacity-100 duration-200 hover:scale-105 border-zinc-700 object-cover w-full h-64" />
                    </div> : <div className='h-64 text-sm text-muted-foreground italic items-center flex justify-center'>This post doesn&apos;t have an image</div>}
                    <div className="bg-zinc-900 bg-opacity-40 p-4 my-auto items-center h-36">
                        <h2 className=' drop-shadow-md  font-semibold tracking-tighter leading-tight text-2xl sm:text-4xl'>{post.title}</h2>
                        <Badge variant='default' className='drop-shadow-md'>Category</Badge>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PstItem
