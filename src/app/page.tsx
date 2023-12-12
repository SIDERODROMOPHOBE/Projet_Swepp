'use client'

import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import {Swapper} from '../components/Swapper'
import { Navbar } from '../components/Navbar'

import { NetworkSwitcher } from '../components/NetworkSwitcher'

import { useNetwork } from 'wagmi'

import '../../Styles/globals.css'

export default function Page() {

  const { chain } = useNetwork()

  return (
    <>

  
    <Navbar/>

    <div className='m-2 text-white'>

      <Connected>
<br/>
    

        { (chain?.name!=="Sepolia") &&

    <div>
      
        Vous êtes connecté(e) au mauvais réseau. Cette application fonctionne sur le réseau Sepolia. &nbsp;
      
      <NetworkSwitcher />
    </div>

        }


        
        <br />

        <Swapper />

      </Connected>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    </>
  )
}
