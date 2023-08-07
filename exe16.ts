let greetingList = ["Ali", "Haris", "Rafay", "Hassan"];

function greeting(greetingList:string) {
    console.log(`Dear ${greetingList}, you're invited for the dinner tonight`)
}

greeting(greetingList[0]);
greeting(greetingList[1]);
greeting(greetingList[2]);
greeting(greetingList[3]);

console.log("Hey Everyone, I found a bigger dinner table and I'd like to invite more people for the dinner tonight");

greetingList.push("Daniyal", "Rahim", "Sultan");

greeting(greetingList[0]);
greeting(greetingList[1]);
greeting(greetingList[2]);
greeting(greetingList[3]);
greeting(greetingList[4]);
greeting(greetingList[5]);
greeting(greetingList[6]);
