function hello (name) {
    if (name) {
        console.log("Hello " + name + "!");
    }
    else {
        console.log("Hello World!");
    }
}
hello();

function madlib (name, subject) {
    return name + "'s" + " favorite subject in school is " + subject + "."
}
madlib ("Tristyn", "art");

function tipAmount (billAmount, serviceQuality) {
    var good;
    var fair;
    var poor;
    if (serviceQuality === "good") {
    return billAmount * .20;
    } else if (serviceQuality === "fair") {
    return billAmount * .15;
    } else if (serviceQuality === "poor") {
    return billAmount * .10;
    }
}
console.log(tipAmount(100, "poor"));

function totalAmount (billAmount, serviceQuality) {
    var good;
    var fair;
    var poor;
    if (serviceQuality === "good") {
    return billAmount * .20 + billAmount;
    } else if (serviceQuality === "fair") {
    return billAmount * .15 + billAmount;
    } else if (serviceQuality === "poor") {
    return billAmount * .10 + billAmount;
    }
}
console.log(totalAmount(100, "good"))

function splitAmount (billAmount, serviceQuality, guests) {
    var good;
    var fair;
    var poor;
    if (serviceQuality === "good") {
    return (billAmount * .20 + billAmount) / guests;
    } else if (serviceQuality === "fair") {
    return (billAmount * .15 + billAmount) / guests;
    } else if (serviceQuality === "poor") {
    return (billAmount * .10 + billAmount) / guests;
    }
}
console.log(splitAmount(100, "good", 5))