"use strict";
let current_users = ["Amir", "Sumbul", "Sana", "Alia", "Asim"];
let new_users = ["Ali", "Sana", "Arif", "Amir", "Rani"];
for (let i = 0; i < new_users.length; ++i) {
    if (current_users.includes(new_users[i])) {
        console.log(`Please enter a different username`);
    }
    else {
        console.log(`Username ${new_users[i]} is available for this.`);
    }
}
