// Write your solution in this file!
// var  customerName="bob";
// const upperCaseCustomer=function (){
//    customerName=customerName.toUpperCase();
// //    return customerName;
 
// }
// console.log(upperCaseCustomer())
// console.log(customerName)

// const setBestCustomer=function(bestCustomer="not bob"){
//     return bestCustomer
// }
// const overwriteBestCustomer=setBestCustomer("Stella")

// const leastFavoriteCustomer = 'some initial value';

// // Function to attempt changing the least favorite customer
// function changeLeastFavoriteCustomer() {
//     leastFavoriteCustomer = 'new value'; // This will throw an error
// }

// Declare the global variable customerName and set it to 'bob'
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set the best customer
function setBestCustomer() {
    bestCustomer = 'not bob';
}
 console.log(setBestCustomer())
// Function to overwrite the best customer
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

// Declare a constant for the least favorite customer
const leastFavoriteCustomer = 'some initial value';

// Function to attempt changing the least favorite customer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This will throw an error
}
