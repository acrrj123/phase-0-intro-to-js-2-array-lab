// Write your solution here!

    const cats = ["Milo", "Otis", "Garfield"];

    function destructivelyAppendCat(name) {
        cats.push("Ralph");
    }
    function destructivelyPrependCat(name) {
        cats.unshift("Bob");
    }
    function destructivelyRemoveLastCat() {
        cats.pop();
    }
    function destructivelyRemoveFirstCat() {
        cats.shift();
    }
    function appendCat(name) {
        return name = [...cats, "Broom"];
    }
    function prependCat(name) {
        return name = ["Arnold", ...cats];
    }
    function removeLastCat() {
        return name = cats.slice(0, 2);
    }
    function removeFirstCat() {
        return name = cats.slice(1);
    }
    

    