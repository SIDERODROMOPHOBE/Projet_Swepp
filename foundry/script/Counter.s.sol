// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";

import {Token1} from "../src/Token1.sol";
import {Token2} from "../src/Token2.sol";
import {Marketplace} from "../src/Marketplace.sol";


contract DeploymentScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        //new Token1();
        //new Token2();
        new Marketplace();
        

        vm.stopBroadcast();
    }
}
