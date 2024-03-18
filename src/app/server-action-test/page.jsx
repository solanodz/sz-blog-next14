import { Button } from '@/components/ui/button'
import React from 'react'
import { addPost, deletePost } from '@/lib/action'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const ServerActionPage = () => {

    return (
        <div className='items-center w-8xl mx-10 sm:mx-36'>
            <section className='flex flex-col sm:flex-row gap-12 sm:gap-28 my-12 w-full'>
                <form action={addPost} className='flex flex-col gap-3 w-full'>
                    <h2 className='text-3xl sm:text-5xl text-center font-bold mb-6'>Create your post</h2>

                    <div className='flex flex-col gap-1'>
                        <Label>Image</Label>
                        <Input type='file' name='image' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Label>Title</Label>
                        <Input type='text' placeholder='Post Title' name='title' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Label>Description</Label>
                        <Input type='text' placeholder='Post Description' name='description' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Label>User ID</Label>
                        <Input type='text' placeholder='Your User ID' name='userId' />
                    </div>
                    {/* <div className='flex flex-col gap-1'>
                    <div className='flex gap-2 items-center'>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><BsFillInfoCircleFill className='animate-pulse' /></TooltipTrigger>
                                <TooltipContent className='bg-zinc-900 max-w-56 text-xs'>
                                    <p>Slug is the endpoint for the specific post (/blog/<span className='text-red-500 font-medium'>:slug</span>). This must be unique. Example:</p><br />
                                    <p>https://sz.blog/post/<span className='text-red-500 font-medium'>first-post</span></p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <Label>Slug</Label>
                    </div>
                    <Input type='text' placeholder='Post slug' />
                </div> */}
                    <Button type='submit'>Create Post</Button>
                </form>

                <form action={deletePost} className='flex flex-col gap-3 w-full'>
                    <h2 className='text-3xl sm:text-5xl text-center font-bold mb-6'>Delete your post</h2>

                    <div className='flex flex-col gap-1'>
                        <Label>Delete Post</Label>
                        <Input type='text' placeholder='Post ID' name='id' />
                    </div>
                    <Button type='submit'>Delete Post</Button>
                </form>
            </section>
        </div>
    )
}

export default ServerActionPage
