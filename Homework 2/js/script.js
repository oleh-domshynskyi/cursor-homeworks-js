let sum = 0;
let N = +prompt('Write N');
while (!Number.isInteger(N) || !N) {
    alert(`Write integer number`);
    N = +prompt('Write N');
}
let M = +prompt('Write M');
while (!Number.isInteger(M) || !M || N>M) {
    alert(`Write integer number and M greater than N`);
    M = +prompt('Write M');
}
skipEvenNumber = confirm('Skip even number');
if (skipEvenNumber) {
    for (N; N <= M; N++) {
        if (N % 2 !== 0) {
            sum += N;
        }
    }
    alert(`Sum without integer numbers ${sum} `);
} else {
    for (N; N <= M; N++) {
        sum += N;
    }
    alert(`Sum with integer numbers ${sum} `);
}

