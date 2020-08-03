//1
function getMaxDigit(number) {
    number = String(number).split("");
    let maxDigit = 0;
    for (let i = 0; i < number.length; i++) {
        if (maxDigit < number[i]) {
            maxDigit = number[i];
        }
    }
    return maxDigit;
}
console.log(getMaxDigit(23456));

//3
function firstLetterToUpperCase(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

console.log(firstLetterToUpperCase('IVAN'))

//4
function salaryAfterTax(salary) {
    const tax = 0.195;
    return Math.round(salary * (1 - tax));

}
console.log(salaryAfterTax(1000));

//5
function getRandomNumber(n, m) {
    const randomNumber = Math.round(Math.random() * (m - n)) + n;
    return randomNumber;
}
console.log(getRandomNumber(1, 10));

//6
function countLetter(letter, word) {
    let count = 0;
    const toLowerLetter = letter.toLowerCase();
    const toLowerWord = word.toLowerCase();
    for (let i = 0; i < toLowerWord.length; i++) {
        if (toLowerLetter === toLowerWord[i]) {
            count++;
        }
    }
    return count;
}
console.log(countLetter('a', 'asasasasa'));

//9
function deleteLetter(letter, word) {
    for (let i = 0; i < word.length; i++) {
        word = word.replace(letter, '')
    }
    return word;
}
console.log(deleteLetter('m', 'My name is Oleh'));

document.writeln(`Max digit of 23456: ${getMaxDigit(23456)} <br>`);
document.writeln(`Salary without tax (salary=1000): ${salaryAfterTax(1000)} <br>`);
document.writeln(`First letter to upper case (name=IVAN): ${firstLetterToUpperCase('IVAN')} <br>`);
document.writeln(`Random number of 1 to 10: ${getRandomNumber(1,10)} <br>`);
document.writeln(`Count letter 'a' in "asasasasa': ${countLetter('a' ,'asasasasa')} <br>`);
document.writeln(`Delete letter "m" in "My name is Oleh": ${deleteLetter('m', 'My name is Oleh')} <br>`);