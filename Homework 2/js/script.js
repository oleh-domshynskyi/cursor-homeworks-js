let sum = 0;
let minValue = +prompt('Write N');
while (!Number.isInteger(minValue) || !minValue) {
    alert(`Write integer number`);
    minValue = +prompt('Write N');
}
let maxValue = +prompt('Write M');
while (!Number.isInteger(maxValue) || !maxValue || minValue>maxValue) {
    alert(`Write integer number and M greater than N`);
    maxValue = +prompt('Write M');
}
const skipEvenNumber = confirm('Skip even number');
if (skipEvenNumber) {
    for (minValue; minValue <= maxValue; minValue++) {
        if (minValue % 2 !== 0) {
            sum += minValue;
        }
    }
    alert(`Sum without integer numbers ${sum} `);
} else {
    for (minValue; minValue <= maxValue; minValue++) {
        sum += minValue;
    }
    alert(`Sum with integer numbers ${sum} `);
}

