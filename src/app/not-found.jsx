import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h4>Not found</h4>
            <Link href='/'>Return to home page 🏠</Link>
        </div>
    )
}

export default NotFound
