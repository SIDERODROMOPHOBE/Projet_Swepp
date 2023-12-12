'use client'

import { useNetwork, useSwitchNetwork } from 'wagmi'
import '../../Styles/globals.css'

export function NetworkSwitcher() {
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  return (
    <>
    


      {switchNetwork && (
             
          
              <button className='hover:text-red-200 text-red-500 underline' onClick={() => switchNetwork(11155111)}>
                
     {(isLoading && 11155111 === pendingChainId)? ' Changement de réseau en cours. Vérifiez votre Wallet':'Connect to Sepolia'}
              </button>
            
          
      )}
    
    
    </>
  )
}
