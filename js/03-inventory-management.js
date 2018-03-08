/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function stringToArray(myString) {
    "use strict";
    var myArray = [],  myArray2 = [], item1 = [], item2 = [], item3 = [], item4 = [], item5 = [];
    myArray = myString.split(",");
    item1["sku"] = parseInt(myArray[0], 10);
    item1["product"] = myArray[1];
    item1["quantity"] = parseInt(myArray[2], 10);
    item1["cost"] = parseFloat(myArray[3]);
    item2["sku"] = parseInt(myArray[4], 10);
    item2["product"] = myArray[5];
    item2["quantity"] = parseInt(myArray[6], 10);
    item2["cost"] = parseFloat(myArray[7]);
    item3["sku"] = parseInt(myArray[8], 10);
    item3["product"] = myArray[9];
    item3["quantity"] = parseInt(myArray[10], 10);
    item3["cost"] = parseFloat(myArray[11]);
    item4["sku"] = parseInt(myArray[12], 10);
    item4["product"] = myArray[13];
    item4["quantity"] = parseInt(myArray[14], 10);
    item4["cost"] = parseFloat(myArray[15]);
    item5["sku"] = parseInt(myArray[16], 10);
    item5["product"] = myArray[17];
    item5["quantity"] = parseInt(myArray[18], 10);
    item5["cost"] = parseFloat(myArray[19]);
    myArray2 = [item1, item2, item3, item4, item5]
    return myArray2;
}

function arrToString(myArray) {
    "use strict";
    var myString = "", i;
    for (i = 0; i < myArray.length; i += 1) {
        myString += myArray[i]["sku"] + "," + myArray[i]["product"] + "," + myArray[i]["quantity"] + "," + myArray[i]["cost"] + ",";
    }
    myString = myString.substr(0, myString.length - 1);
    return myString;
}

function view(arrInventory) {
    "use strict";
    var i;
    for (i = 0; i < arrInventory.length; i += 1) {
        window.console.log(arrInventory[i]["sku"] + " " + arrInventory[i]["product"] + " (" + arrInventory[i]["quantity"] + ") $" +  arrInventory[i]["cost"]);
    }
    window.console.log("\n\n");
}

function update(arrInventory) {
    "use strict";
    var sku, quantity, prompt1, prompt2, i;
    while (true) {
        prompt1 = window.prompt("Enter a SKU");
        sku = parseInt(prompt1, 10);
        window.alert(sku);
        window.alert(sku === 2233 || sku === 3223 || sku === 4824 || sku === 6343 || sku === 9382);
        if (sku === 2233 || sku === 3223 || sku === 4824 || sku === 6343 || sku === 9382) {
            break;
        } else { window.alert("You entered " + prompt1 + " an invalid SKU, please try again..."); }
    }
    while (true) {
        prompt2  = window.prompt("Enter new stock quantity");
        quantity  = parseInt(prompt2, 10);
        window.alert(quantity);
        window.alert(isNaN(quantity));
        if (isNaN(quantity)) {
            window.alert("You entered " + prompt2 + " an invalid quantity, please try again...");
        } else { break; }
    }
    for (i = 0; i < arrInventory.length; i += 1) {
        if (arrInventory[i]["sku"] === sku) {
            arrInventory[i]["quantity"] = quantity;
        }
    }
    window.localStorage.removeItem("inventoryStorage");
    window.alert("checking storage is cleared: " + window.localStorage.getItem("inventoryStorage"));
    view(arrInventory);
    window.alert(arrToString(arrInventory));
    window.localStorage.setItem("inventoryStorage", arrToString(arrInventory));
    window.alert("Checking updated local storage: " + window.localStorage.getItem("inventoryStorage"));
    window.console.log("Inventory has been updated...");
    return arrInventory;
}

function exit() {
    "use strict";
    window.console.log("Exiting program...");
}

function reset() {
    "use strict";
    window.localStorage.removeItem("inventoryStorage");
    window.console.log("Clearing Web Storage");
}

function main() {
    "use strict";
    var inventory = [], command;
    display_menu();
    window.alert("Checking local storage :" + localStorage.getItem("inventoryStorage"));
    if (localStorage.getItem("inventoryStorage") === null) {
        inventory = stringToArray("2233,Hat,12,14.99,3223,Socks,36,9.99,4824,Shirt,10,15.99,6343,Jeans,22,39.99,9382,Jacket,5,49.99");
        view(inventory);
        window.alert("Setting inventory variable to default inventory: " + arrToString(inventory));
        localStorage.setItem("inventoryStorage", arrToString(inventory));
        window.alert("Checking local storage set to default inventory :" + localStorage.getItem("inventoryStorage"));
    } else {
        inventory = stringToArray(localStorage.getItem("inventoryStorage"));
        view(inventory);
        window.alert("Set inventory variable to local storage cache" + arrToString(inventory));
    }
    
    while (true) {
        command = window.prompt("Please enter view, update or exit...");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                view(update(inventory));
            } else if (command === "reset") {
                reset();
            } else if (command === "exit") {
                exit();
                break;
            } else {
                window.alert("You entered " + command + ", that is an invalid command. Please enter view, update or exit...");
            }
        }
    }
}


main();