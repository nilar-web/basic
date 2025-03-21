let bread = 2.5;
let milk = 3;
let egg = 2;
let cheese = 4.5;
let apples = 5;
let chicken = 8;
let rice = 3.5;
let butter = 2.75;
let juice = 3.25;

let discount_rate = 0.1;
let tax_rate = 0.07;

let total = bread + milk + egg + cheese + apples + chicken + rice + butter + juice;
console.log("Gross Total :" + total);

let discount_amount = total * discount_rate;
console.log("Discount_amount : " + discount_amount);
total = total - discount_amount;

let tax_amount = total * tax_rate;
console.log("Tax_Amount : " + tax_amount);

final_cost = total + tax_amount;
console.log("Final Cost : " + final_cost);