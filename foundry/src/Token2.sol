// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;


import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20{
    
    //address is 0x0c302E08DBB72a3F361512137936aD2cfA21eC74
    
    address GodUser = 0x2bdC20F9377221032bcBFBcf9Ea5bB8B4A212165;
    address OtherUser =0x2bdC20F9377221032bcBFBcf9Ea5bB8B4A212165;

    constructor() ERC20("StableCoan","STC")
    {
        
    }

    modifier onlyGod {
      require(msg.sender == GodUser || msg.sender==OtherUser);
      _;
   }

   function ChangeUser(address _add) public onlyGod
   {
    OtherUser=_add;
   }

   function CreateMoney(address _cible,uint256 _amount) public
   {
    _mint(_cible, _amount);
   }
}
