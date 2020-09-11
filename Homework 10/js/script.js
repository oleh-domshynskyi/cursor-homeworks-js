let sounds = [`sounds/do.mp3`, `sounds/re.mp3`, `sounds/mi.mp3`, `sounds/fa.mp3`, `sounds/sol.mp3`, `sounds/la.mp3`, `sounds/si.mp3`];
let button = document.querySelectorAll('button');

function playSound(path) {
    let sound = new Audio();
    sound.src = path;
    sound.play();
    return sound;
};

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        playSound(sounds[i]);
    });
};

function playSoundWithKey(e) {
    switch (e.keyCode) {
        case 81:
            playSound(sounds[0]);
            break;
        case 87:
            playSound(sounds[1]);
            break;
        case 69:
            playSound(sounds[2]);
            break;
        case 82:
            playSound(sounds[3]);
            break;
        case 84:
            playSound(sounds[4]);
            break;
        case 89:
            playSound(sounds[5]);
            break;
        case 85:
            playSound(sounds[6]);
            break;
    };
};

document.addEventListener("keydown", playSoundWithKey);