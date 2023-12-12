'use client'

import { useAccount,useBalance } from 'wagmi'
import '../../Styles/globals.css'


export function Connected({ children }: { children: React.ReactNode }) {
  const myAccount = useAccount()

  const myBalance = useBalance({
    address: myAccount.address,
  })

  if (!myAccount.isConnected) return null
  return (
  <>
  {/*

  
  <div>
    <h1>
      Connected to : {myAccount.address}
      </h1>
      
      <h1>
      Balance : {myBalance.data?.formatted}  {myBalance.data?.symbol}
    </h1>
  </div>
  */}

  {children}

  </>
  )
}
