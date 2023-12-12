'use client'

import {Connected} from '../components/Connected'
import {Swapper} from '../components/Swapper'
import {Navbar} from '../components/Navbar'

import {NetworkSwitcher} from '../components/NetworkSwitcher'

import {useNetwork} from 'wagmi'

import '../../Styles/globals.css'

export default function Page() {

  const { chain } = useNetwork()

  return (
    <>

  
    <Navbar/>

    <div className='m-2 text-white'>

      <Connected>
<br/>
    

        { (chain?.name!=="Goerli") &&

    <div>
      
        Vous êtes connecté(e) au mauvais réseau. Cette application fonctionne sur le réseau Göerli. &nbsp;
      
      <NetworkSwitcher />
    </div>

        }


        
        <br />
        { (chain?.name==="Goerli") &&
        <Swapper />
      }
      </Connected>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    </>
  )
}
