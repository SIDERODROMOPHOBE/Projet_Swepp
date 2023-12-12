

import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'

import { NetworkSwitcher } from '../components/NetworkSwitcher'


import '../../Styles/globals.css'

export default function Page() {
  return (
    <div>
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <h1>wagmi + Next.js</h1>
      <Connect />
      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />

      </Connected>
    </div>
  )
}
