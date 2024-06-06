import React from 'react'
import Link from 'next/link'
import { ButtonOne } from "./Buttons"

function Header() {
  return (
    <>
      <div className='flex justify-between items-center px-10 py-5 bg-nav'>
        <div className='border'>
            <p>Logo</p>
        </div>
        <div>
            <ul className='w-full flex justify-between gap-x-12'>
                <Link href="/home">
                 <li>Home</li>
                </Link>
                <Link href="/courses">
                 <li>Courses</li>
                </Link>
                <Link href="/community">
                 <li>Community</li>
                </Link>
                <Link href="/careers">
                 <li>Careers</li>
                </Link>
                <Link href="/news">
                 <li>News</li>
                </Link>
            </ul>
        </div>
        <div>
            <ButtonOne text="Enroll now"/>
        </div>
      </div>
    </>
  )
}

export default Header