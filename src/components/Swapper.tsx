'use client'

import '../../Styles/globals.css'
import { useAccount,useBalance } from 'wagmi'

export function Swapper()
{
    return(
        
<>
<div className="bg-indigo-950 mb-10">



<center>
<div className="m-3 w-80 h-300 border-white border-2 rounded">
    
    <h1 className="block m-2 text-2xl font-medium text-gray-900 dark:text-white">Swapper</h1>
    
    <div className='m-3'>
    <input placeholder='Token1' type="number" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

    
    <input placeholder='Token2' type="number" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
<br/>   


    <div className='flex flex-row-reverse'>
        <div className='border-white border-2 rounded bg-gray-500 hover:bg-gray-800'>
            <button className='m-1 text-white'>
                Swap Token
            </button>
        </div>
            
            &nbsp;
        <div className='border-white border-2 rounded bg-gray-500 hover:bg-gray-800'>
            <button className='m-1 text-white'>
                Allow ERC20
            </button>
        </div>

    </div>


</div>
</div>
</center>


</div>

</>
        
    )
}