"use strict";
let userNames02 = ["Ali", "Saad", "Hassan", "Assad", "Fahad"];
userNames02.splice(0, 4, "empty");
if (userNames02.includes("empty")) {
    console.log(`We need to find some users`);
}
