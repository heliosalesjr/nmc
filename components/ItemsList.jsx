import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

function ItemsList() {
  return (
    <>
        <div className='p-4 border border-pink-200 my-4 flex justify-between rounded-xl gap-4 items-start'>
            <div>
                <h2 className='font-semibold text-2xl'>Title</h2>
                <div>Division</div>
            </div>

            <div className='flex gap-2'>
                <RemoveBtn />
                <Link href={"/editItem/123"}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default ItemsList