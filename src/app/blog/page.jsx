
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

const BlogPage = async () => {

    // FETCH DATA USING API 
    // const posts = await getData()

    // FETCH DATA WITHOUT API
    const posts = await getPosts()

    return (
        <div>
            <h2 className={`${poppins.className} text-4xl sm:text-7xl my-3 font-semibold antialiased`}>POSTS</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl items-center mx-auto gap-8 my-12'>
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
