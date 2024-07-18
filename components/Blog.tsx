import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Blog = ({Blog, date, title, description}) => {
  return (
    <>
     <div className='flex flex-col justify-between h-[690px] w-[400.25px]'>
        <div className='border h-[336px]'>
          <Image src={Blog} alt='blog image'/>
        </div>
        <div>
          <p className='text-[#317ACC] text-[24px] max-w-[389.25px] max-h-[102px]'>{title}</p>
        </div>
        <div>
          <p className='text-[16px] text-gray-500'>APRIL 9, 2022</p>
        </div>
        <div>
          <p className='text-[20px] max-w-[390.35px] max-h-[90px]'>The Yale School of Art is pleased to announce that alumni  Guggenheim Memorial Foundation..........</p>
        </div>
        <div>
          <Link href={'/articles/${id}'} ><p className='text-[#317ACC] text-[24px] max-h-[36px] max-w-[135.25px]'>Read More</p></Link>
        </div>
     </div>
    </>
  )
}

export default Blog