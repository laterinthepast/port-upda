



const API_URL = "https://www.greetingsapi.com/random"


    getGreeting(API_URL);
    async function getGreeting(url) {
        let myObject = await fetch(url);
        let myText = await myObject.json();
        let greeting = myText.greeting;
        document.getElementById("hello").innerHTML = greeting;
    }





