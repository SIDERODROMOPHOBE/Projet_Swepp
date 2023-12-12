// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;


import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract Token1 is ERC20{
    //Bad apple token takes the price of something in chainlink
    // address is 0x174562BA0BDb890fFd7046C8890EDeEA30eEe93D
    
    address GodUser = 0x2bdC20F9377221032bcBFBcf9Ea5bB8B4A212165;
    address OtherUser =0x2bdC20F9377221032bcBFBcf9Ea5bB8B4A212165;

    constructor() ERC20("BadAppleToken","BAT")
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
