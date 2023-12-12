'use client'

import { useNetwork, useSwitchNetwork } from 'wagmi'
import '../../Styles/globals.css'

export function NetworkSwitcher() {
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  return (
    <div>
      <div>
        Connected to {chain?.name ?? chain?.id}
      </div>
      <br />
      {switchNetwork && (
        <div>
          Switch to:{' '}
          
              <button  onClick={() => switchNetwork(11155111)}>
                Sepolia
                {isLoading && 11155111 === pendingChainId && ' (switching)'}
              </button>
            
          
        </div>
      )}

      <div>{error?.message}</div>
    </div>
  )
}
