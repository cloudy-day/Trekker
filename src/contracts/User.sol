// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract User {
    address owner;
    struct Stakeholder {
        address key;
        string name;
        string wAdd;
        string location;
        string typ;
    }
    // Stakeholder[] private stakeholders;
    mapping(address=>Stakeholder) users;
    constructor()
    {
        owner=msg.sender;
        Stakeholder memory temp = Stakeholder(owner,"DRB","drb.com","Dhaka","Regulatory Body");
        users[owner]=temp;
        // stakeholders.push(temp);
    }
    
    modifier onlyOwner () {
        require(msg.sender == owner);
        _;
    }
    function createStakeholder(address key,string memory name, string memory wAdd,string memory  location,string memory typ) public onlyOwner {
        
        Stakeholder memory temp = Stakeholder(key,name,wAdd,location,typ);
        users[key]=temp;
        // stakeholders.push(temp);
    }

    function readStakeholder(address key) public view returns (string memory, string memory) {
        require((users[key].key==key),"User not found");
        return (users[key].name, users[key].typ);
    }

}


