# setting-up-js-project-parcel-node
Oefening voor Les 15, Novi Hogeschool, Javascript project opzetten met node en parcel

Stap 1: Maak volgende files aan:
index.html (koppel hieraan css en js bestand -> bij script tag voor javascript bestand, volgende toevoegen: type = module)
styles.css
main.js of app.js

Stap 2: Plaats deze files in een map genaamd src

Stap 3:   - In terminal: npm init
          - Ga de gegeven stappen doorlopen, opletten bij vraag over main -> veranderen in main.js / app.js (afhankelijk van hoe je js bestand heet)
          - Akkoord geven dmv y
          - package.json file wordt nu gemaakt
          
Stap 4: Parcel installeren als developer dependancy in temrinal: npm install --save-dev parcel

Stap 5: Installeer extra plugin (als developer dependancy) voor parcel om cache te legen: npm install parel-plugin-nuke-dist --save-dev

Stap 6: Voeg het volgende toe aan script in package.jsn file (test regel kan weg):
"scripts": {
  "start": "parcel src/index.html",
  "build": "parcel build index.html"
},

Stap 7: Git initialiseren in terminal: git init

Stap 8:   - .gitignore bestand aanmaken in projectmap
          - voeg hieraan toe:
          /.idea
          /node_modules
          /.parcel-cache
          /dist

Stap 9: Project koppelen aan nieuwe git repository
          
Stap 10: NPM applicatie starten in terminal: npm run start

Stap 11: Je kan nu de pagina bekijken via http://localhost:1234


AXIOS inrichten

Stap 1: Volg eerst alle vorige stappen

Stap 2: Installeer Axios in terminal (je installeert dit als een normale dependency, omdat je het nodig hebt om de applicatie zelf te runnen): npm install axios

Stap 3: Voeg volgende toe bovenaan je js bestand: import axios from 'axios';

Stap 4: Maak een asynchrone functie met een try (met daarin wat je uit wilt voeren) en catch (voor het afvangen van een mogelijke error), bijv:

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        const jokeAddedInHtml = document.getElementById("joke-text");
        jokeAddedInHtml.innerText = `${result.data.value}`
    } catch(error) {
        console.error(error)
    }
}

fetchJoke();
