# Token Swapping plateform, using on chain Oracle Data

Using this WebApp, you can Swap BadAppel Tokens for StabloCoans token, matching the BAP token price on ETH price.
We are using Chainlink Oracle to query the present price.
The smart contracts are hosted on Goerli Network

## This app provides 3 Smart contracts :
1- BadApple Token (foundry/src/Token1.sol)  Goerli address : 0x174562BA0BDb890fFd7046C8890EDeEA30eEe93D
2- StableCoan Token (foundry/src/Token2.sol)     Goerli address : 0x0c302E08DBB72a3F361512137936aD2cfA21eC74
3- AMM marketplace contract (foundry/src/Marketplace.sol)  Goerli address : 0x62c1f8F144f612875BA8AfC74A2504c567615930

Most of the Wagmi work is done on the component Swapper.tsx (src/components/swapper.tsx)
The Webapp Front-end is hosted on Vercel, and accessible [Here](https://projet-swepp.vercel.app/) 


# IF UI NOT WORKING PROPERLY :
Unfortunately, during concecption i ran out of Goerli Ether si Icould not test the whole UI.
The swap is SUPPOSED to work, I am so sorry if it does not, i will correct it when i get more Goerli Ether 😭

If not working, the swap is still possible by hand using the Etherscan interface :
First Allow the contract to use your token by using [this Approve Function](https://goerli.etherscan.io/address/0x174562BA0BDb890fFd7046C8890EDeEA30eEe93D#writeContract#F3) 

use 0x62c1f8F144f612875BA8AfC74A2504c567615930 as value for Spender
and dont forget to add eighteen 0's after the uint256 value

Then you can do the swap by using [this function](https://goerli.etherscan.io/address/0x62c1f8f144f612875ba8afc74a2504c567615930#writeContract#F1)

and entrering the EXACT AMOUNT of token to swap (do not add the eighteen 0's after)


I am so sorry again if you have to go through this, Screw my Poverty 😵‍💫😵‍💫

# If you want to host this app locally :

If you want to localhost this app, this is simple :

Git clone this repos
Open in Command Line interpretor

type :
npm -i
npm run dev

then on internet browser, go to url [localhost:3000](http://localhost:3000)

this should work. Try refreshing the page when opening it for the first time.





This is a [Next.js](https://nextjs.org) + [wagmi](https://wagmi.sh) project bootstrapped with [`create-wagmi`](https://github.com/wagmi-dev/wagmi/tree/main/packages/create-wagmi)

# Getting Started

Run `npm run dev` in your terminal, and then open [localhost:3000](http://localhost:3000) in your browser.

Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/pages/index.tsx`) will automatically update the webpage.

# Learn more

To learn more about [Next.js](https://nextjs.org) or [wagmi](https://wagmi.sh), check out the following resources:

- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [Next.js Documentation](https://nextjs.org/docs) learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
