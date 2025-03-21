let burger = 8.5;
let fries = 3.25;
let soda = 2.00;
let dessert = 5.75;

let service_charge = 0.1;
let tax_rate = 0.07;

let ItemizedNames = ["burger", "fries", "soda", "dessert"]; //string array
let Numbers = [8.5, 3.25, 2.00, 5.75];  //number array

let total = burger + fries + soda + dessert;
console.log("Gross Total :" + total);

let service_amount = total + service_charge;
console.log("Service_charge : " + total);

let tax_amount = total * tax_rate;
console.log("Tax_Amount : " + tax_amount);

final_cost = total + tax_amount;
console.log("Final Cost : " + final_cost);
