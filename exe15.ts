let greetingList = ["Ali", "Haris", "Noman", "Hassan"];

function greeting(greetingList:string) {
    console.log(`Dear ${greetingList}, you're invited for the dinner tonight`)
}

greeting(greetingList[0])
greeting(greetingList[1])
greeting(greetingList[2])
greeting(greetingList[3])

console.log(`${greetingList[2]} can't come for the dinner tonight`)

greetingList.splice(2, 1, "Rafay");

greeting(greetingList[0])
greeting(greetingList[1])
greeting(greetingList[2])
greeting(greetingList[3])
