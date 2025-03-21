
function getCityName(lat, lon){
    const geoApiUrl = `https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
  
    const cityNamePromise = fetch(geoApiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data.locality;
        });
    return cityNamePromise;
}


function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    const apiKey = ""; // Replace 'YOUR_API_KEY' with your actual API key

    const cityNamePromise = getCityName(lat, lon);
        cityNamePromise.then((cityName) => {
            const cityHeader = document.getElementById("city-name");
            cityHeader.innerHTML = `Weather in: ${cityName}`;
        });

    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m`;


    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <p>latitude: ${data.latitude}, longitude: ${data.longitude}</p>
                <p>Temperature: ${data.current.temperature_2m} &#8451;</p>`;
        });
}

document
    .getElementById("weatherForm")
    .addEventListener("submit", showweatherDetails);
