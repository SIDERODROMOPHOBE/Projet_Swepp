'use client'

import '../../Styles/globals.css'
import { useContractRead,useContractWrite,usePrepareContractWrite } from 'wagmi'
import {useEffect, useState, ChangeEvent } from "react";
import {chainlinkABI} from './contracts'






export function Swapper()
{

    const [swapRate,setSwapRate]=useState("")

    //get rate from chainlink for informative purpose only
    const getSwapRate = useContractRead(
        {
            address: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
            ...chainlinkABI,
            functionName:'latestRoundData',
        })
        //setSwapRate(Number(getSwapRate.data))
        
        useEffect(()=>
        {
        getSwapRate.refetch
        //setSwapRate(getSwapRate.data?.toString())
        console.log(getSwapRate.data)
    },[])


    return(
        
<>
<div className="bg-indigo-950 mb-10">

<h1>{swapRate}</h1>

<center>
<div className="m-3 w-80 h-300 border-white border-2 rounded bg-violet-950">
    
    <div className='m-2'>
        <h1 className="underline m-2 block text-2xl font-medium text-white">Swapper</h1>
         </div>

    
    <div className='m-3'>
    <h1 className="m-1 block text-xs font-medium text-white">Enter Amount of BAP token to swap</h1>
    <input placeholder='BadAppelToken amount' type="number" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

    <h1 className="m-1 text-xs font-medium text-white">You will receive approximately</h1>
    <input disabled={true} placeholder='StableCoan amount' type="number" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
<br/>   

<h1 className=" text-xs font-medium  text-white">Expected Change Rate ATM is : 1BAP = 1000 STC</h1>
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