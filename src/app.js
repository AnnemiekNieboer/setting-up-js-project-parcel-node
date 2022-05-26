import giveMeAJoke  from 'give-me-a-joke';

giveMeAJoke.getRandomDadJoke((joke) => {
    console.log("Het domme grapje is:" + joke)
});

console.log("Word ik geladen?");