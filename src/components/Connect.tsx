'use client'

import { BaseError } from 'viem'
import { useAccount, useConnect, useDisconnect,configureChains,sepolia,createConfig  } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

export function Connect() {
  const { connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()


  const { chains, publicClient } = configureChains(
    [sepolia],
    [infuraProvider({ apiKey: '01d84256042040afb53ee2ef68300312' })],
  )
  const config = createConfig({
    autoConnect: true,
    connectors: [new MetaMaskConnector],
    publicClient,
  })

  return (
   
     <div className='flex flex-row-reverse'>
          <ul className="text-gray-200 flex flex-col font-medium md:p-0 border border-red-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
        {connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <li>

            
            <button className="block px-1 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={x.id} onClick={
              () => {connect({ connector: x })
              location.reload()}
              }>
              {x.name}
              {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
            </button>
            </li>
          ))}
          <li>
          <button className="block flex px-1 py-2 text-red-200 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-red-500" onClick={() => disconnect()}>Disconnect</button>
          </li>
          <li>
          <button className="block flex px-1 py-2 text-red-200 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-red-500" onClick={() => window.location.href = 'https://github.com/SIDERODROMOPHOBE/Projet_Swepp'}>Github</button>
          

          </li>
          </ul>
        </div>
      

   
          )
}
