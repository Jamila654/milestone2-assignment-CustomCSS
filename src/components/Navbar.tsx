import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="assignment">Assignment 2</div>
      <div className="nav">
        <Link className='l1' href='/'>Home</Link>
        <Link className='l2' href='/about'>About</Link>
        <Link className='l3' href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

