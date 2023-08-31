function makeSandwich (flavors: string[]) {
    console.log("You ordered Sandwich with:");
    for (let userFlavor of flavors) {
    console.log(`* ${userFlavor}`);
    }
}

makeSandwich(["Cheese", "Pepproni", "Lettuce"]);
makeSandwich(["Onion", "Bacon", "Chicken"]);
makeSandwich(["Chipotle", "Olive", "Mushroom"]);
