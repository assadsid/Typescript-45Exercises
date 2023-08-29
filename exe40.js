"use strict";
function make_Album(artist, album) {
    let make_Album1 = {
        artist,
        album
    };
    return make_Album1;
}
let dict01 = make_Album("Zayn Malik", "Mind of Mine");
let dict02 = make_Album("Ed Sheeran", "Afterglow");
let dict03 = make_Album("Calvin Harris", "By Your Side");
// console.log(`${dict01}\n${dict02}\n${dict03}`);
console.log(dict01);
console.log(dict02);
console.log(dict03);
