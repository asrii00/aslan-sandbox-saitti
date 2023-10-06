function getWeather(cityID) {
    var key = '';

    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (res) {
            if (res.ok){
                console.log("response ok");
                return res.json();
            }else{
                console.log("failed");
                alert("Weather API call failed. (API key removed from public repo)");
            }
            })
            
        .then(function (data) {
            drawWeather(data); 
        })
        .catch(function () {
        });
}

window.onload = function () {
    getWeather(643492);
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    let weatherText = d.weather[0].description;
    document.getElementById('description').innerHTML = weatherText;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;

    if (weatherText.includes("cloud")){
        document.getElementById('weatherIcon').src="cloud.png";
    }
    else  if (weatherText.includes("clear")){
        document.getElementById('weatherIcon').src="sun.png";
    }else if (weatherText.includes("rain")){
        document.getElementById('weatherIcon').src="rain.png";
    }

}

////////////////////////////////////////////////////////////////////

const petBox = document.getElementById("petBox");
const currentCheckbox = document.getElementById("currentOnly");
const formerCheckbox = document.getElementById("formerOnly");
const catCheckbox = document.getElementById("cat");
const dogCheckbox = document.getElementById("dog");
const geckoCheckbox = document.getElementById("gecko");
const fishCheckbox = document.getElementById("fish");

async function fetchData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("HTTP error - status: ${response.status}");
    }

    return await response.json();
}

async function handleData() {
    try {
        clearView();
        let data = await fetchData("petdata.json");
        console.log(data);

        data.forEach((item, index) => {
            const nameText = `${item.name}`;
            const speciesText = `${item.species}`;
            const status = `${item.status}`;
            const birthyear = `${item.birthyear}`;
            const color = `${item.color}`;
            const imageExists = `${item.imageavailable}`;
            console.log(imageExists);


            const htmlString = "<h3><u>" + nameText + "</u></h3> <u>Species:</u> " + speciesText + "<br><u> Color:</u> " + color + "<br><u>Birthyear:</u> " + birthyear;
            //console.log(nameText, speciesText);


            const newElement = document.createElement("div");
            newElement.classList.add("petcard");
            newElement.innerHTML = htmlString;

            if ((currentCheckbox.checked && status == "Current") || !currentCheckbox.checked) {

                if (catCheckbox.checked && speciesText == "Cat") {

                    petBox.appendChild(newElement);

                    if (imageExists == 'true') {
                        const newImgElement = document.createElement("img");
                        newImgElement.src = `${item.imgpath}`;
                        newElement.appendChild(newImgElement);
                    }
                }


                if (dogCheckbox.checked && speciesText == "Dog") {

                    petBox.appendChild(newElement);

                    if (imageExists == 'true') {
                        const newImgElement = document.createElement("img");
                        newImgElement.src = `${item.imgpath}`;
                        newElement.appendChild(newImgElement);
                    }
                }


                if (geckoCheckbox.checked && speciesText == "Leopard gecko") {

                    petBox.appendChild(newElement);

                    if (imageExists == 'true') {
                        const newImgElement = document.createElement("img");
                        newImgElement.src = `${item.imgpath}`;
                        newElement.appendChild(newImgElement);
                    }
                }


                if (fishCheckbox.checked && speciesText == "Ruffe") {
                    petBox.appendChild(newElement);

                    if (imageExists == 'true') {
                        const newImgElement = document.createElement("img");
                        newImgElement.src = `${item.imgpath}`;
                        newElement.appendChild(newImgElement);

                    }
                }
            }
        }
        );


    } catch (error) {
        console.error("Error: ", error);
    }

}

function clearView() {
    petBox.innerHTML = "";

}


document.addEventListener("DOMContentLoaded", handleData);

currentCheckbox.addEventListener("change", handleData);
catCheckbox.addEventListener("change", handleData);
dogCheckbox.addEventListener("change", handleData);
geckoCheckbox.addEventListener("change", handleData);
fishCheckbox.addEventListener("change", handleData);


