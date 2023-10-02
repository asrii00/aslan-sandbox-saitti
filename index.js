const person = {
    name: 'Asla',
    age: 25,
    height: '6ft',
    favoriteMushroom: 'Cortinarius semisanguineus',
};

const button = document.getElementById("objectButton");
const randomButton = document.getElementById("randomButton");
const nameC = document.getElementById("nameCell");
const ageC = document.getElementById("ageCell");
const heightC = document.getElementById("heightCell");
const shroomC = document.getElementById("mushroomCell");
const lightSwitch = document.getElementById("lightSwitch");
const bulb = document.getElementById("bulb");
const catButton = document.getElementById("catButton");

button.addEventListener('click', objectFunction);
randomButton.addEventListener('click', addRandomPerson);
lightSwitch.addEventListener('click', turnOnLight);
catButton.addEventListener('click', catAdder);


function objectFunction() {
    let personValueArray = Object.values(person);

    nameC.innerHTML = personValueArray[0];
    ageC.innerHTML = personValueArray[1];
    heightC.innerHTML = personValueArray[2];
    shroomC.innerHTML = personValueArray[3];

}
function objectFunction2(somePerson) {
    let personValueArray = Object.values(somePerson);

    nameC.innerHTML = personValueArray[0];
    ageC.innerHTML = personValueArray[1];
    heightC.innerHTML = personValueArray[2];
    shroomC.innerHTML = personValueArray[3];

}

function Person(name, age, height, shroom) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.favoriteMushroom = shroom;
}

function addRandomPerson() {
    let random = Math.floor(Math.random() * 6); //0-5
    let person0;
    if (random == 0) {
        person0 = new Person("Sally", 20, "5ft 1in", "Boletus edulis");
    } else if (random == 1) {
        person0 = new Person("Molly", 36, "5ft 8in", "Amanita muscaria");
    } else if (random == 2) {
        person0 = new Person("Ben", 29, "5ft 6in", "Lycoperdon perlatum");
    }
    else if (random == 3) {
        person0 = new Person("Donald", 56, "6ft 1in", "Suillus luteus");
    }
    else if (random == 4) {
        person0 = new Person("Hex", 26, "5ft 7in", "Lactarius rufus");
    }
    else if (random == 5) {
        person0 = new Person("Matt", 41, "5ft 10in", "Russula paludosa");
    }
    console.log(person0);
    objectFunction2(person0);

}


function turnOnLight() {
    let random = Math.floor(Math.random() * 8); //0-5
    let secondsOn=(random+1) * 600;

    bulb.src = "on.png";
    document.getElementById("room").style = "background-color: white;"
    setTimeout(turnOff, secondsOn);

}

function turnOff(){
    bulb.src = "off.png";
    document.getElementById("room").style = "background-color: rgb(23, 28, 28);";
    document.getElementById("lightText").innerHTML = "Sorry, the electrician I hired was really incompetent."

}


function catAdder(){
    const image = document.createElement("img");
    image.src="catto.png";
    image.style="margin: 10px;";
    document.getElementById("catDiv").appendChild(image);

}