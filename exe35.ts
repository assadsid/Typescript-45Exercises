let pets = ["Dog", "Cat", "Parrot"];

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
    if (pets[i] === "Dog") {
        console.log(`A dog would make a great pet.\n`);
    } else if (pets[i] === "Cat") {
        console.log(`Cats are quite impervious to threats.\n`);
    } else if (pets[i] === "Parrot") {
        console.log(`A talkative parrots are funny.\n`);
    }
}

let messageForPets = "What these animals have in common?";
let answerOfMessage = "Any of these animals would make a great pet!";

console.log(`Q. ${messageForPets}\nA. ${answerOfMessage}`);