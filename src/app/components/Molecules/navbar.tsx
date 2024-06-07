import React from 'react'
import { Icon } from '../Atoms/icon'
import { Title } from '../Atoms/title'

export const Navbar = () => {
  return (
    <>
        <div className=' w-full h-[5em] bg-[var(--primary,_rgba(255,_229,_92,_1))] items-center flex justify-center fixed lg:block lg:w-64 lg:h-screen lg:left-0 lg:top-0 lg:content-center'>
            <Icon/>
            <Title/>
        </div>
    </>
  )
}


// flex-col 