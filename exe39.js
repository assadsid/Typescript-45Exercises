"use strict";
function city_country(city01, country01) {
    return (`${city01}, ${country01}`);
}
let pair01 = city_country("Karachi", "Pakistan");
let pair02 = city_country("New York", "USA");
let pair03 = city_country("Rome", "Italy");
console.log(`${pair01}\n${pair02}\n${pair03}`);
