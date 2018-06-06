// Write your solution in this file!
var customerName = "bob"


function upperCaseCustomerName() {
  console.log("before:", window.customerName)
  customerName = customerName.toUpperCase()
  console.log("after:", window.customerName)
  return customerName
}
