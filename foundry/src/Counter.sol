// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;


import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract Counter is ERC20{
    
    constructor() ERC20("Token1","TK1")
    {
        
    }
}
