# setting-up-js-project-parcel-node
Oefening voor Les 15, Novi Hogeschool, Javascript project opzetten met node en parcel

Stap 1: Maak volgende files aan:
index.html (koppel hieraan css en js bestand -> incl type = module)
styles.css
main.js of app.js

Stap 2: Plaats deze files in een map genaamd src

Stap 3:   - In terminal: npm init
          - Ga de gegeven stappen doorlopen, opletten bij vraag over main -> veranderen in main.js / app.js
          - Akkoord geven dmv y
          - package.json file wordt nu gemaakt
          
Stap 4: Parcel installeren als devloper dependancy in temrinal: npm install --save-dev parcel

Stap 5: Voeg het volgende toe aan script in package.jsn file (test regel kan weg):
"scripts": {
  "start": "parcel src/index.html",
  "build": "parcel build index.html"
},

Stap 6: Git initialiseren in terminal: git init

Stap 7:   - .gitignore bestand aanmaken in projectmap
          - voeg hieraan toe:
          /.idea
          /nodemodules
          /.parcel-cache
          
Stap 8: NPM applicatie starten in terminal: npm run start

Stap 9: Je kan nu de pagina bekijken via http://localhost:1234
