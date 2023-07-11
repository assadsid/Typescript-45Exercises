var names = ["Ali", "Saad", "Sana", "Hina"];
var message = ("I'd like to invite you a Dinner gathering at my home");
for (var a = 0; a < names.length; a++) {
    console.log(names[a] + ", " + message);
}
names[1] = "Ahmed";
names[4] = "Aisha";
for (var a = 0; a < names.length; a++) {
    console.log(names[a] + ", " + message);
}
