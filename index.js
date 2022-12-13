// Write your solution in this file!
'use strict'
const employee = {
    name: "Sam",
    streetAddress: "8000 east 12th avenue"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee, [key]: value,};
    }


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {

    const newEmployee = {...employee};
  
    delete newEmployee[key];
  
    return newEmployee;
  }
  
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
    
}

















