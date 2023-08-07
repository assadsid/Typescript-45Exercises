let greetingList = ["Ali", "Haris", "Rafay", "Hassan"];
function greeting(greetingList) {
    console.log(`Dear ${greetingList}, you're invited for the dinner tonight`);
}
greetingList.push("Daniyal", "Rahim", "Sultan");
greeting(greetingList[0]);
greeting(greetingList[1]);
greeting(greetingList[2]);
greeting(greetingList[3]);
greeting(greetingList[4]);
greeting(greetingList[5]);
greeting(greetingList[6]);
console.log("Sadly, the bigger table is not available on time, only two people i can invite for the dinner tonight");
greetingList.shift();
greetingList.shift();
greetingList.shift();
greetingList.pop();
greetingList.pop();
greeting(greetingList[0]);
greeting(greetingList[1]);
