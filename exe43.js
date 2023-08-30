"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const magician3 = ["Harry Houdini", "Criss Angel", "Ricky Jay"];
function make_Great(magician3) {
    magician3.forEach(e => console.log("The Great", e));
}
function show_Magicians2() {
    return console.log(magician3);
}
show_Magicians2();
make_Great(magician3);
