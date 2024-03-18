
import { poppins } from '@/ui/fonts'
import React from 'react'
import PostItem from '../../components/PostItem'
import { getPosts } from '@/lib/data'


// const getData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } })

//     if (!res.ok) {
//         throw new Error('Failed to fetch data ⛔')
//     }

//     return res.json()
// }

export const metadata = {
    title: 'sz.blog | Posts',
    description: 'sz.blog | Posts description',
}

const BlogPage = async () => {

    // FETCH DATA USING API 
    // const posts = await getData()

    // FETCH DATA WITHOUT API
    const posts = await getPosts()

    return (
        <div className=' sm:mx-auto mx-0'>
            <div className='flex lg:flex-row flex-col justify-between gap-20 items-center'>
                <h2 className={`${poppins.className} text-4xl sm:text-7xl my-3 font-bold antialiased `}>POSTS</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl items-center mx-auto gap-4 sm:gap-4 my-12'>
                {posts.map((post) => (
                    <div key={post.id}>
                        <PostItem post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage
