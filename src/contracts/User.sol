// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract User {
    address owner;
    struct Stakeholder {
        string key;
        string name;
        string wAdd;
        string location;
        string typ;
    }
    constructor()
    {
        owner=msg.sender;
    }
    Stakeholder[] private stakeholders;
    modifier onlyOwner () {
        require(msg.sender == owner."only  DRB can do this");
        _;
    }
    function createStakeholder(string memory key,string memory name, string memory wAdd,string memory  location,string memory typ) public onlyOwner {
        stakeholders.push(Stakeholder(key,name,wAdd,location,typ));
    }

    function readStakeholder(string memory key) public view returns (string memory, string memory) {

        for (uint i = 0; i < stakeholders.length; i++) {
            if (keccak256(abi.encodePacked(stakeholders[i].key)) == keccak256(abi.encodePacked(key))) {
                return (stakeholders[i].name, stakeholders[i].typ);
            }
        }
        revert("User not found");
    }

}


