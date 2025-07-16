import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const BlogTableItem = ({mongoId, authorImage, title, author,date,deleteBlog }) => {
    const BlogDate = new Date(date)
  return (
    <tr className='bg-white border-b'>
      <th scope="row" className='items-center gap-3 hidden sm:flex px-6 py-4 font font-medium text-gray-900 whitespace-nowrap'>
        <Image
          src={authorImage ? authorImage : assets.profile_icon}
          alt='authorImg'
          height={40}
          width={40}
          className='rounded-full'
        />
        <p>{author ? author : "No author"}</p>
      </th>
      <td className='px-6 py-4'>
        {title ? title : "No title"}
      </td>
      <td className='px-6 py-4'>
        {BlogDate.toDateString()}
      </td>
      <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
        X
      </td>
    </tr>
  )
}

export default BlogTableItem
