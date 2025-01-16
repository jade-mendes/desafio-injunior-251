function encontrarElementoUnico(array) {
    const counter = new Map();

    for (let element of array) {
        if (counter.has(element)) {
            counter.set(element, counter.get(element) + 1);
        } else {
            counter.set(element, 1);
        }
    }

    for (let [element, freq] of counter.entries()) {
        if (freq === 1) {
            return element;
        }
    }

    return null; 
}

const numbers = [2, 3, 7, 3, 2];
const uniqueNumber = encontrarElementoUnico(numbers);

console.log("O elemento que aparece apenas uma vez é:", uniqueNumber);
