// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

interface Minter
{
    function CreateMoney(address _cible,uint256 _amount) public;
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

contract Marketplace 
{
    address BadAppel=0x0A8348BE26744165FBAD288966a4f9af74c44989;
    address stc=0x244824263654D2b1573a2BD68336237D9388CA8e;

    IERC20 BadApple = IERC20(BadAppel);
    IERC20 StableCoin = IERC20(stc);

    Minter BadApple_Minter = Minter(BadAppel);
    Minter StableCoin_Minter = Minter(stc);

    //Uni token to $ address : 0x553303d460ee0afb37edff9be42922d8ff63220e
    Chainlink Uni = Chainlink(0x553303d460ee0afb37edff9be42922d8ff63220e);

    uint256 BadApple_Price=0; //Query from chainlink oracle there
    uint256 stc_Price=100; //stablecoin value is 100


    //faire le approve avant (j'ai jamais compris comment ca marche le vieux approve la grrrrerrerrrer)
    //azy je vais faire sans le approve, go créer une technologie là
    function swap(uint256 _amount) public
    {
        BadApple_Minter.CreateMoney(msg.sender, _amount);
    }
}