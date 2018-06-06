// Write your solution in this file!
var customerName = "bob"


function upperCaseCustomerName() {
  console.log("before:", window.customerName)
  cusomerName = customerName.toUpperCase()
  console.log("after:", window.customerName)
  return customerName
}

upperCaseCustomerName()
