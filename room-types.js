// roomType = "single" => price = $50 per night;
// double => 80
// suite => 150
// deluxe => 200
// Else => "invalid room type"

let RoomType = "single";
let price = "";

if (roomType === "single") {
    price = 50;
} else if (roomType === "double") {
    price = 80;
} else if (roomType === "suite") {
    price = 150;
} else if (roomType === "deluxe") {
    price = 200;
} else {
    price = "invalid room type";
}

console.log(price);
// switch case
let roomType = "single";