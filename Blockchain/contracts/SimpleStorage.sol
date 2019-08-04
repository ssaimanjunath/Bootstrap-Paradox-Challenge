pragma solidity ^0.5.0;

contract SimpleStorage {  
  struct PatientDetails {
        uint prod_id;
        string prod_status;
        string authority;        
        string timestamp;
    }
    
    PatientDetails[] public patient;    

    function addReport (uint _prod_id,string memory _prod_status, string memory _authority, string memory _timestamp) public returns(uint) {
        patient.length++;
        patient[patient.length-1].prod_id = _prod_id;
        patient[patient.length-1].prod_status = _prod_status;
        patient[patient.length-1].authority = _authority;
        patient[patient.length-1].timestamp = _timestamp;
        return patient.length;        
    }
    
    function getPatCount() public view returns(uint) {
        return patient.length;
    }
    
    function getProd(uint index) public view returns (uint, string memory, string memory, string memory)
    {
        return (patient[index].prod_id, patient[index].prod_status, patient[index].authority, patient[index].timestamp);
    }

}
