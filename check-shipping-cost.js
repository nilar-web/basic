// A customer qualifies for free shipping if:
// Their total cart value is at least $50 and,
// They are a premium member
// else, shipping charges will apply

let cartValue = 60;
let memberType = "premium";

if (cartValue >= 50 && memberType === "premium") {
    console.log("quilify for free shipping . . .");
} else {
    console.log("shipping charge apply.");
}