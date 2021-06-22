const age = 5;
const isFemale = false;
const driverStatus = "Renee";
const Name = "Jan";
const totalAmount = 200;

if (age >= 18) {
    console.log("Je mag naar binnen!");

} else {
    console.log("Je bent te jong, we vragen je vriendelijk buiten te blijven.");
}


if (isFemale) {
    console.log("Je mag naar binnen!");
} else {
    console.log("Je mag niet naar binnen");
}


if (driverStatus === "Bob") {
    console.log("Je mag rijden");
} else {
    console.log("Je mag niet rijden");
}


if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("geen korting");
}

if (Name === "Sarah" || Name === "Bram") {
    console.log("Je hebt recht op een gratis biertje!");
} else {
    console.log("je krijgt geen gratis biertje");
}

if (totalAmount > 25) {
    console.log("Gratis bitterballen!");
} else if (totalAmount > 50) {
    console.log("Gratis nachos!");
} else if (totalAmount >= 100) {
    console.log("Gratis fles champagne!");
} else {
    console.log("niks gratis!");
}
