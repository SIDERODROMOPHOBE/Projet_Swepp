// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

interface Minter
{
    function CreateMoney(address _cible,uint256 _amount) external;
}

interface Chainlink
{
        function latestRoundData() external view returns(
            uint80 roundId,
            int256 answer,   
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        );
}

//address(this)= 0x17e9b093844856765Cae08A9798e88Be4D0dCdb5
//Pitié etherscan valide mon contrat la
// https://goerli.etherscan.io/address/0x0ec598786867cca9f735da65a2a6c863dc647e8c

contract Marketplace 
{
    address BadAppel=0x174562BA0BDb890fFd7046C8890EDeEA30eEe93D;
    address stc=0x0c302E08DBB72a3F361512137936aD2cfA21eC74;

    IERC20 BadApple = IERC20(BadAppel);
    IERC20 StableCoin = IERC20(stc);

    Minter BadApple_Minter = Minter(BadAppel);
    Minter StableCoin_Minter = Minter(stc);

//page importante : https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1

    //eth/USD Göerli address : 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
    Chainlink eth = Chainlink(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);

    
    //Ducoup dans le front, faire un bouton approve, puis faire un bouton swap
    //le approve est un call via abi ERC20 sur le contract du bat token
    function swapSTCtoBAP(uint256 _amount) public
    {
       //préemptivement on allow le transferfrom de STC a BAP
       
       (,int256 answer, , , ) =eth.latestRoundData();        
        
        uint256 _due = (10**8)*(_amount)/(uint256(answer));



        //Create liquidity in this contract to then give it to msg.sender
        BadApple_Minter.CreateMoney(address(this),_due/10**8);


        StableCoin.transferFrom(msg.sender, address(this), _amount);
        BadApple.transferFrom(address(this), msg.sender, _due/10**8);
    }

        function swapBAPtoSTC(uint256 _amount) public
    {
       //préemptivement on allow le transferfrom de STC a BAP
       
       (,int256 answer, , , ) =eth.latestRoundData();        
        
        uint256 _due = (10**8)*(_amount)*(uint256(answer));

        //Create liquidity in this contract to then give it to msg.sender
        StableCoin_Minter.CreateMoney(address(this),_due/10**8);


        StableCoin.transferFrom(msg.sender, address(this), _amount);
        BadApple.transferFrom(address(this), msg.sender, _due/10**8);
    }
}