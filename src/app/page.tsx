import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import {Swapper} from '../components/Swapper'
import { Navbar } from '../components/Navbar'

import { NetworkSwitcher } from '../components/NetworkSwitcher'


import '../../Styles/globals.css'

export default function Page() {
  
  return (
    <>

  
    <Navbar/>

    <div className='m-2 text-white'>

      <Connected>
<br/>
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />

        <Swapper />

      </Connected>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
    </>
  )
}
