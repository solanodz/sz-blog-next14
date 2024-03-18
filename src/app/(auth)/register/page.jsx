import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import React from 'react'
import { poppins } from '@/ui/fonts'

export const metadata = {
    title: 'sz.blog | Register',
    description: 'sz.blog | Register here',
}

const RegisterPage = () => {
    return (
        <div>
            <h2 className={`${poppins.className} font-bold text-4xl text-center`}>Register Page</h2>
            <form className=' p-3 flex flex-col gap-3 max-w-xl justify-center mx-auto my-20'>
                <div className='flex gap-1 flex-col'>
                    <Label>Username</Label>
                    <Input type='text' placeholder='Jhon Doe' />
                </div>
                <div className='flex gap-1 flex-col'>
                    <Label>Email</Label>
                    <Input type='email' placeholder='Jhon Doe' />
                </div>
                <div className='flex gap-1 flex-col'>
                    <Label>Password</Label>
                    <Input type='password' placeholder='********' />
                </div>
                <Button type='submit'>Register</Button>
            </form>
        </div>
    )
}

export default RegisterPage
