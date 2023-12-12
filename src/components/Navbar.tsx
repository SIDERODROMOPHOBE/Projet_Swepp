'use client'

import '../../Styles/globals.css'
import { Connect } from '../components/Connect'
import foto from '../../Styles/gab-logos_transparent.png'
import Image from 'next/image'

export function Navbar()
{
    return(
        <>
        
        


<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <a className="flex items-center space-x-3 rtl:space-x-reverse">

      <Image src={foto} width={50} height={50} alt='Logo GabCorp'/>

        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GabSwapper</span>
    </a>

    <div className="hidden w-full md:block md:w-auto">

    <Connect/>

    </div>
  </div>
</nav>

        
        </>
    )
}