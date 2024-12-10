// Write your solution in this file!
// Step 1: Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Step 2: Non-destructive update function
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Step 3: Destructive update function
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Step 4: Non-destructive delete function
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Step 5: Destructive delete function
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  console.log(updateEmployeeWithKeyAndValue(employee, "title", "Software Engineer")); // { name: 'John Doe', streetAddress: '123 Main St', title: 'Software Engineer' }
  console.log(employee); // Original object unchanged
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "title", "Manager")); // { name: 'John Doe', streetAddress: '123 Main St', title: 'Manager' }
  console.log(employee); // Original object updated
  
  console.log(deleteFromEmployeeByKey(employee, "streetAddress")); // { name: 'John Doe', title: 'Manager' }
  console.log(employee); // Original object unchanged
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "title")); // { name: 'John Doe', streetAddress: '123 Main St' }
  console.log(employee); // Original object updated
  