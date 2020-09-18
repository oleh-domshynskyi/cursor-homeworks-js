const BASE = 'https://swapi.dev/api/';

const getCharacterInformationButton = document.querySelector('.get-character-information-button');
const container = document.querySelector('.container');
const getPlanetInformationButton = document.querySelector('.get-planet-information-button');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let page = 1;

nextButton.disabled = true;
prevButton.disabled = true;
nextButton.style = "color:black; background:white";
prevButton.style = "color:black; background:white";



const getCharachters = () => {
    return axios.get(`${BASE}films/2/`).then(
            (res) => {
                return res.data.characters
            })
        .then((charactersLink) => {
            return Promise.all(charactersLink.map((element) => axios.get(element).then((res) => res.data)));
        })
}

const displayCharacters = (characters) => {
    container.innerHTML = '';
    return characters.map((element) => {
        const character = document.createElement('div');
        character.className = 'character';
        character.innerHTML = `
          <div class="character-container">
            <span class="character-name">Name: ${element.name}</span><br>
            <span class="character-birth-year">Birth year: ${element.birth_year}</span><br>
            <span class="character-gender">Gender: ${element.gender}</span>
          </div>`;
        container.append(character);
    });
}

getCharacterInformationButton.addEventListener('click', () => {
    getCharachters().then(displayCharacters);
    nextButton.disabled = true;
    nextButton.style = "color:black; background:white";
    prevButton.style = "color:black; background:white";
    prevButton.disabled = true;
});


const planets = (page) => {
    const parameter = {
        url: `${BASE}planets/`,
        params: {
            page
        }
    }
    return axios(parameter).then(
        (res) => {
            console.log(res)
            return res.data.results;
        }
    )
}

const displayPlanets = (planets) => {
    container.innerHTML = '';
    return planets.forEach(element => {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.innerHTML = `
      <div class="planet-container">
        <span class="planet-name">Name: ${element.name}</span>
      </div> `;
        container.append(planet);
    });
}

getPlanetInformationButton.addEventListener('click', () => {
    planets().then(displayPlanets);
    nextButton.disabled = false;
    prevButton.disabled = false;
    nextButton.style = "color:yellow; background:black";
    prevButton.style = "color:yellow; background:black"
});

prevButton.addEventListener('click', () => {
    if (page <= 1) {
        prevButton.disabled = true;
        prevButton.style = "color:black; background:white";
    } else {

        nextButton.disabled = false;
        nextButton.style = "color:yellow; background:black"
        planets(--page).then(displayPlanets);
    }
});

nextButton.addEventListener('click', () => {
    if (page >= 6) {
        nextButton.disabled = true;
        nextButton.style = "color:black; background:white"
    } else {
        prevButton.disabled = false;
        prevButton.style = "color:yellow; background:black"
        planets(++page).then(displayPlanets);
    }
});