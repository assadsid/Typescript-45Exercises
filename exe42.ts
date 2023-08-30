const magician2 = ["Harry Houdini", "Criss Angel", "Ricky Jay"];

function make_Great(magician2:any) {
    for (let i = 0; i < magician2.length; i++) {
        console.log("The Great " + magician2[i])
    }
}

make_Great(magician2);