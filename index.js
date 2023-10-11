
const button = document.getElementById("objectButton");
const randomButton = document.getElementById("randomButton");
const europeanButton = document.getElementById("europeanButton");
const nameC = document.getElementById("nameCell");
const ageC = document.getElementById("ageCell");
const heightC = document.getElementById("heightCell");
const shroomC = document.getElementById("mushroomCell");
const lightSwitch = document.getElementById("lightSwitch");
const bulb = document.getElementById("bulb");
const catButton = document.getElementById("catButton");



button.addEventListener('click', objectFunction);
randomButton.addEventListener('click', addRandomPerson);
europeanButton.addEventListener('click', addEuropeanPerson);
lightSwitch.addEventListener('click', turnOnLight);
catButton.addEventListener('click', catAdder);

window.onload = function () {
    let news = new News("Update (2023/10/11): ", "The site is now live. See README.md for issues/to-do list.", "newsSection");
}

const personAsla = {
    name: 'Asla',
    age: 25,
    height: '6ft',
    favoriteMushroom: 'Cortinarius semisanguineus',
};

function objectFunction() {
    let personValueArray = Object.values(personAsla);

    nameC.innerHTML = personValueArray[0];
    ageC.innerHTML = personValueArray[1];
    heightC.innerHTML = personValueArray[2];
    shroomC.innerHTML = personValueArray[3];

}


class News {
    constructor(title, content, elementId) {
        this.title = title;
        this.content = content; 

        let html = `<p>${this.title}</p>
        <p>${this.content}</p>`;
        
        let container = document.getElementById(elementId);
        container.innerHTML = html;
    }

}




class Person {

    constructor(name, age, height, shroom) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.favoriteMushroom = shroom;
    }

    getFaveMushroom() {
        return this.favoriteMushroom;

    }

    getMushroomImage() {
        if (this.favoriteMushroom == "Amanita muscaria") {
            return "media/amanita.jpg";
        }
        else if (this.favoriteMushroom == "Boletus edulis") {
            return "media/boletus.jpg";
        }
        else if (this.favoriteMushroom == "Russula paludosa") {
            return "media/russula.jpg";
        }
        else {
            return "none";
        }
    }

    putInfoInTable() {

        nameC.innerHTML = this.name;
        ageC.innerHTML = this.age;
        heightC.innerHTML = this.height;
        shroomC.innerHTML = this.favoriteMushroom;

    }

    addMushroomImg() {
        const img= this.getMushroomImage();
        if (img != "none") {
            const image = document.createElement("img");
            image.src = img;
            image.style = "margin: 8px; width: 32px; display: inline; vertical-align: middle  ";
            shroomC.appendChild(image);
        }
    }
}

class EuropeanPerson extends Person {

    constructor(name, age, heightFtIn, shroom, heightCm ) {
        super(name, age, heightFtIn, shroom);
        this.heightInCm = heightCm;
        this.#privateMethod();
    }

    getHeightInCm(){
        return this.heightInCm;
    }

    putInfoInTable(){
        nameC.innerHTML = this.name;
        ageC.innerHTML = this.age;
        heightC.innerHTML = this.heightInCm + " cm";
        shroomC.innerHTML = this.favoriteMushroom;
    }

    #privateMethod(){
        console.log("Secret text");
    }
        
    
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
    person0.putInfoInTable();
    person0.addMushroomImg();

}

function addEuropeanPerson(){
    let european;
    european = new EuropeanPerson("Maria", 33, "5ft 4in", "Boletus edulis", 163);
    european.putInfoInTable();
    european.addMushroomImg();

}


function turnOnLight() {
    let random = Math.floor(Math.random() * 8); //0-5
    let secondsOn = (random + 1) * 600;

    bulb.src = "./media/on.png";
    document.getElementById("room").style = "background-color: white;"
    setTimeout(turnOff, secondsOn);

}

function turnOff() {
    bulb.src = "./media/off.png";
    document.getElementById("room").style = "background-color: rgb(23, 28, 28);";
    document.getElementById("lightText").innerHTML = "Sorry, the electrician I hired was really incompetent."

}


function catAdder() {
    const image = document.createElement("img");
    let num = document.getElementById("catDiv").childElementCount;
    console.log(num);

    if (num == 15){
        image.src = "./media/evilcatto.png";


    }else {
        image.src = "./media/catto.png";
    }
    
    image.style = "margin: 10px;";
    document.getElementById("catDiv").appendChild(image);

}