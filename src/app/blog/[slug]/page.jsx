
import { Badge } from '@/components/ui/badge'
import React, { Suspense } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { ImSpinner8 } from "react-icons/im";
import Link from 'next/link'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data'
import Image from 'next/image';
import { format } from 'date-fns';


// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//     if (!res.ok) {
//         throw new Error('Failed to fetch data ⛔')
//     }

//     return res.json()
// }

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
    // const post = await getData(slug)

    const post = await getPost(slug);
    console.log(post);

    return (
        <article className="items-start min-h-[45rem] w-fit dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
            <div className='flex lg:flex-row flex-col gap-6 px-6 sm:px-8 items-start'>
                {post.img ? <div className='flex justify-center'>
                    <Image src={post?.img} alt='foto-perfil' width={600} height={1} quality={100} className="p-2 border-2 border-zinc-600 object-cover max-w-md max-h-[600px]  min-h-[200px] sm:min-h-[300px]" />
                </div> : <div />}
                <div className='flex flex-col gap-3'>
                    <Link href={'/blog'} className='w-fit'><FaArrowLeft className='text-2xl text-white relative hover:-translate-x-2 duration-200' /></Link>
                    <Badge variant='default' className='flex drop-shadow-md w-fit'>{format(new Date(post.createdAt.toString()), 'MMMM d, yyyy.')}</Badge>
                    <h2 className='font-bold text-4xl max-w-2xl relative'>{post?.title}</h2>
                    {(post && <Suspense fallback={<div><ImSpinner8 className=' min-h-16 animate-spin text-zinc-400 text-2xl mx-12' /></div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>)}
                    <div className='flex flex-col gap-3 h-fit relative my-3 pr-6'>
                        {post?.description}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SinglePostPage
