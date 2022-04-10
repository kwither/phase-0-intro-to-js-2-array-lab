// Write your solution here!

const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat() {
    return cats.push("Ralph");
}

function destructivelyPrependCat() {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop(2);
}

function destructivelyRemoveFirstCat() {
    return cats.shift(0);
}

function appendCat() {
    return [...cats, "Broom"];
}

function prependCat() {
    return ["Arnold", ...cats];
}

function removeLastCat() {
    return(cats.slice(0, cats.length -1));
}

function removeFirstCat() {
    return(cats.slice(1));
}

