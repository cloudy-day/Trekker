// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Transaction{

    struct TransactionItem{
        address providerKey;
        string providerName;
        address receiverKey;
        string receiverName;
        string medicineName;
        string batchNo;
        string deliveryDate;
    }

    TransactionItem[] private  transactions;
    TransactionItem[] private results;

    function createTransaction(
        address providerKey,
        string memory providerName,
        address receiverKey,
        string memory receiverName,
        string memory medicineName,
        string memory batchNo,
        string memory deliveryDate
    ) public{
        transactions.push(TransactionItem(providerKey,providerName,receiverKey,receiverName,medicineName,batchNo,deliveryDate));
    }
    
    function getTransaction(
        string memory medicineName,
        string memory batchNo
    ) public  returns(
        TransactionItem[] memory
    ){
        for(uint i=0; i< transactions.length; i++){
            if(keccak256(abi.encodePacked(transactions[i].medicineName)) == keccak256(abi.encodePacked(medicineName))
            && keccak256(abi.encodePacked(transactions[i].batchNo)) == keccak256(abi.encodePacked(batchNo))){

                results.push(TransactionItem(transactions[i].providerKey,transactions[i].providerName,transactions[i].receiverKey,transactions[i].receiverName,transactions[i].medicineName,transactions[i].batchNo,transactions[i].deliveryDate));

            }
        }
        return results;
    }
}