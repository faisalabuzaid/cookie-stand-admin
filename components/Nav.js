import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className="py-4 px-8 bg-green-500 flex justify-between">
            <div className="text-xl font-semibold"><Link href="/">Cookie Stand Admin</Link></div>
        </div>
    )
}
