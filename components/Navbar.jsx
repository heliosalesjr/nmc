import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-pink-500 px-8 py-4 rounded-xl mt-8'>
        <Link className="text-white font-black" href={"/"}>NMC</Link>
        <Link className='bg-white p-4 rounded' href={"/addTopic"}>Add item</Link>
    </nav>
  )
}

export default Navbar