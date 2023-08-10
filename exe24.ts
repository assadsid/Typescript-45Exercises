let grade = "A";
let score = 80;

if(`If Grade is A, It's true`) {
    console.log(grade == "A");
}
if(`If Grade and its type is B, It's false`) {
    console.log(grade == "B");
}
if(`If Grade written in lowercase, It's true`) {
    console.log(grade.toLowerCase() == "a");
}
if(`If score is 80 but type not match, It's false`) {
    console.log(score === "80");
}
if(`If only score is equal to 80, It's true`) {
    console.log(score == "80");
}
if(`If score greater than 80, It's false`) {
    console.log(score > 80);
}
if(`If score less than 85, It's true`) {
    console.log(score < 85);
}
if(`If score greater and equal to 85, It's false`) {
    console.log(score >= 85);
}
if(`If score less and equal to 80, It's true`) {
    console.log(score >= 80);
}
if(`If grade is match but score not match, It's false`) {
    console.log(grade === "A" && score == 85);
}
if(`If grade is not match but score is match, It's true`) {
    console.log(grade === "B" || score == 80);
}

let arr02 = [10, 20, 30, 40, 50, 60];

let findNum = 30;

for(let i = 0; i < arr02.length; i++) {
    // console.log(arr02[i]);
    if(arr02[i] === findNum) {
        console.log(`Found ${findNum} on index ${i}`);
        break;
    }
}

let arr03 = [10, 20, 30, 40, 50, 60];

let findNum03 = 70;
let found = false;

for(let i = 0; i < arr03.length; i++) {
    // console.log(arr03[i]);
    if(arr03[i] === findNum03) {
        console.log(`Found ${findNum03} on index ${i}`);
        found = true;
        break;
    }
}
if (found == false) {
    console.log(`Not found`);
}
