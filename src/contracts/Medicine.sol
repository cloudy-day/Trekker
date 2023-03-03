// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Medicine{
    struct MedicineItem{
        string manufacturerName;
        string medicineName;
        string batchNo;
        string dosage;
        string price;
        string mftDate;
        string expDate; 
    }
    MedicineItem[] private medicines;

    function createMedicine(
        string memory manufacturerName,
        string memory medicineName,
        string memory batchNo,
        string memory dosage,
        string memory price,
        string memory mftDate,
        string memory expDate) 
        public{

            medicines.push(MedicineItem(manufacturerName,medicineName,batchNo,dosage,price,mftDate,expDate));
        }
    function getMedicineDetails(
        string memory medicineName,
        string memory batchNo) 
        public view returns (
            string memory manufacturerName,
            string memory dosage,
            string memory price,
            string memory mftDate,
            string memory expDate){

                for(uint i=0; i < medicines.length; i++){
                    if (keccak256(abi.encodePacked(medicines[i].medicineName)) == keccak256(abi.encodePacked(medicineName))
                        && keccak256(abi.encodePacked(medicines[i].batchNo)) == keccak256(abi.encodePacked(batchNo))) {
                        return (medicines[i].manufacturerName, medicines[i].dosage,medicines[i].price,medicines[i].mftDate,medicines[i].expDate);
                    }

                    revert("User not found");

                }


            }

    function getMedicineName(string memory medicineName) public view returns(bool){

        for(uint i=0; i < medicines.length; i++){
            if (keccak256(abi.encodePacked(medicines[i].medicineName)) == keccak256(abi.encodePacked(medicineName))) {
                return true;
            }

           else{
            return false;
           }

        }

    }


    function getBatchNo(string memory batchNo) public view returns(bool){

        for(uint i=0;i < medicines.length; i++){
            if (keccak256(abi.encodePacked(medicines[i].batchNo)) == keccak256(abi.encodePacked(batchNo))) {
                return true;
            }

           else{
            return false;
           }

        }

    }


}