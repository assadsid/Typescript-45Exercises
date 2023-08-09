"use strict";
let grade = "A";
let score = 80;
if (`If Grade is A, It's true`) {
    console.log(grade == "A");
}
if (`If Grade and its type is B, It's false`) {
    console.log(grade == "B");
}
if (`If Grade written in lowercase, It's true`) {
    console.log(grade.toLowerCase() == "a");
}
if (`If score is 80 but type not match, It's false`) {
    console.log(score === "80");
}
if (`If only score is equal to 80, It's true`) {
    console.log(score == "80");
}
if (`Is score greater than 80, It's false`) {
    console.log(score > 80);
}
if (`Is score less than 85, It's true`) {
    console.log(score < 85);
}
if (`Is score greater and equal to 85, It's false`) {
    console.log(score >= 85);
}
if (`Is score less and equal to 80, It's true`) {
    console.log(score >= 80);
}
if (`Is grade is match but score not match, It's false`) {
    console.log(grade === "A" && score == 85);
}
if (`Is grade is not match but score is match, It's true`) {
    console.log(grade === "B" || score == 80);
}
let arr01 = [10, 20, 30, 40];
if (`Is 35 in array, It's false`) {
    console.log(35 in arr01);
}
if (`Is 30 in array, It's true`) {
    console.log(30 in arr01);
}
