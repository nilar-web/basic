
//Itemized Bil
let burger = 8.50;
let fries = 3.25;
let soda = 2.00;
let dessert = 5.75;

let totalBill = burger + fries + soda + dessert;
let serviceCharge = totalBill * 0.10;
let tax = (totalBill + serviceCharge) * 0.07;
let numberOfPeople = 2; // Change this value according to group size
let splitAmount = (totalBill + serviceCharge + tax) / numberOfPeople;

console.log("Total Bill: $" + totalBill.toFixed(2));
console.log("Service Charge: $" + serviceCharge.toFixed(2));
console.log("Tax: $" + tax.toFixed(2));
console.log("Each person pays: $" + splitAmount.toFixed(2));



//Fuel Efficiency and Trip Cost Calculator
let distance = 300;
let fuelEfficiency = 25;
let costPerGallon = 3.75;

let fuelNeeded = distance / fuelEfficiency;
let tripCost = fuelNeeded * costPerGallon;

console.log("Fuel needed: " + fuelNeeded + " gallons");
console.log("Trip cost: $" + tripCost);