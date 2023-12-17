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
    //Goerli Addresses
    /*
    address BadAppel=0x174562BA0BDb890fFd7046C8890EDeEA30eEe93D;
    address stc=0x0c302E08DBB72a3F361512137936aD2cfA21eC74;
    */

    //Sepolia Addresses
    address BadAppel=0xCfF6C87b4881A2Dc06050996Ad20C94f3378F289;
    address stc=0x31716589c4703B4354F5a48DDD048AfEA7B19656;

    IERC20 BadApple = IERC20(BadAppel);
    IERC20 StableCoin = IERC20(stc);

    Minter BadApple_Minter = Minter(BadAppel);
    Minter StableCoin_Minter = Minter(stc);

//page importante : https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1

    //eth/USD Göerli address : 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
    //Chainlink eth = Chainlink(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);

    
    //eth/USD Sepolia address : 0x694AA1769357215DE4FAC081bf1f309aDC325306
    Chainlink eth = Chainlink(0x694AA1769357215DE4FAC081bf1f309aDC325306);

    //Ducoup dans le front, faire un bouton approve, puis faire un bouton swap
    //le approve est un call via abi ERC20 sur le contract du bat token
    function swapSTCtoBAP(uint256 _amount) public
    {
       //préemptivement on allow le transferfrom de STC a BAP
       
       require(StableCoin.allowance(msg.sender, address(this))== _amount,"Wrong allowance");

       (,int256 answer, , , ) =eth.latestRoundData();        
        
        uint256 _due = (10**8)*(_amount*10**18)/(uint256(answer));



        StableCoin.transferFrom(msg.sender, address(this), _amount);
        BadApple.transfer( msg.sender, _due);
    }

        function swapBAPtoSTC(uint256 _amount) public
    {
       
       
       //préemptivement on allow le transferfrom de STC a BAP
       
       (,int256 answer, , , ) =eth.latestRoundData();        
        
        uint256 _due = (10**8)*(_amount*10**18)*(uint256(answer));


        BadApple.transferFrom(msg.sender, address(this), _amount);
        StableCoin.transfer(msg.sender, _due);
    }
}