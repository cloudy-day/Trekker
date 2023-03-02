// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Crud {
    struct Item {
        uint id;
        string name;
        uint quantity;
    }

    Item[] private items;
    uint private nextId = 1;

    function createItem(string memory name, uint quantity) public {
        items.push(Item(nextId, name, quantity));
        nextId++;
    }

    function readItem(uint id) public view returns (string memory, uint) {
        for (uint i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                return (items[i].name, items[i].quantity);
            }
        }
        revert("Item not found");
    }

    function updateItem(uint id, string memory name, uint quantity) public {
        for (uint i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items[i].name = name;
                items[i].quantity = quantity;
                return;
            }
        }
        revert("Item not found");
    }

    function deleteItem(uint id) public {
        for (uint i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                delete items[i];
                return;
            }
        }
        revert("Item not found");
    }
}
