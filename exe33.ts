let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numberArr.length; i++) {
    
    if (numberArr[i] === 1) {
        console.log("1st");
    } else if (numberArr[i] === 2) {
        console.log("2nd");
    } else if (numberArr[i] === 3) {
        console.log("3rd");
    } else {
        console.log(`${numberArr[i]}th`)
    }
}
