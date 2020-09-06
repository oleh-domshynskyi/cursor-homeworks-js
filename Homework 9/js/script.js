let interval;
const firstButton = document.querySelector('.create-blocks-button');
const secondButton = document.querySelector('.generate-color-button');
const thirdButton = document.querySelector('.start-interval-button');
const fourthButton = document.querySelector('.stop-interval-button');

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * (255 + 1));
    const g = Math.floor(Math.random() * (255 + 1));
    const b = Math.floor(Math.random() * (255 + 1));
    const color = [r, g, b];
    return (color);
}

const generateBlocks = () => {
    for (let i = 0; i < 25; i++) {
        let sqr = document.createElement("div");
        sqr.className = 'block';
        document.querySelector(".container").append(sqr);
    }
}

const paintBlock = () => {
    (document.querySelectorAll('.block')).forEach(element => element.style.backgroundColor = `rgb(${generateRandomColor()})`);
}

const generateBlocksInterval = () => (interval = setInterval(() => paintBlock(), 1000));

function stopInterval() {
    clearInterval(interval);
}

function createBlocksButton() {
    generateBlocks();
    firstButton.disabled = true;
    return;
}

function startIntervalButton() {
    generateBlocksInterval();
    secondButton.disabled = true;
    thirdButton.disabled = true;
    return;
}

function stopIntervalButton() {
    stopInterval();
    secondButton.disabled = false;
    thirdButton.disabled = false;
    return;
}