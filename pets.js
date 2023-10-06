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







