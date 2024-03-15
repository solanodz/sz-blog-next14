
import { poppins } from '@/ui/fonts'
import React from 'react'
import PostItem from '../../components/PostItem'

const BlogPage = () => {
    return (
        <div>
            <h2 className={`${poppins.className} text-8xl my-3 font-bold antialiased`}>POSTS</h2>
            <div className='grid grid-cols-3 max-w-6xl items-center mx-auto gap-8 my-12'>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    )
}

export default BlogPage
