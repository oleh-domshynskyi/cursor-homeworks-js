let getLastFiveNumbers = +Date.now().toString().substr(8, 13);
const startDate = Date.now();

const getRandomChinese = (length) => {
    return new Promise((resolve) => {
        let i = 0;
        let chineseSymbols = '';
        while (i < length) {
            getLastFiveNumbers += 50;
            chineseSymbols += String.fromCharCode(getLastFiveNumbers);
            i++
        }
        setTimeout(() => resolve(chineseSymbols),
            50 * length);

    })
}

getRandomChinese(5).then(result => {
    console.log(`Result: ${result} for ${Date.now()-startDate} sec`);
});