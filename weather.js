function getWeather(cityID) {
    var key = '';

    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (res) {
            if (res.ok){
                console.log("response ok");
                return res.json();
            }else{
                console.log("failed");
                alert("API call failed");
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