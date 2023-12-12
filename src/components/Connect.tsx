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
    <div>
      <div>
        {isConnected && (
          <button onClick={() => disconnect()}>
            Disconnect from {connector?.name}
          </button>
        )}

        {connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <button key={x.id} onClick={() => connect({ connector: x })}>
              {x.name}
              {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
            </button>
          ))}
      </div>

      {//error && <div>{(error as BaseError).shortMessage}</div>
      }
    </div>
  )
}
