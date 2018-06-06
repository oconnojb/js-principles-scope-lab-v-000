// Write your solution in this file!
var customerName = "bob"


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  console.log(bestCustomer)
  bestCustomer = "not bob"
  console.log(bestCustomer)
  console.log(window.bestCustomer)
}
