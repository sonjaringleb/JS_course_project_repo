
function getCityName(lat, lon){
    const geoApiUrl = `https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
  
    const cityNamePromise = fetch(geoApiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
           const cityInfo = [data.city, data.locality];
          return cityInfo;
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
            cityHeader.innerHTML = `Weather in: ${cityInfo[1]}, ${cityInfo[0]}`;
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
         const tempList = document.getElementById("hourlyTempList");
      for (let i = 0; i < data.hourly.time.length; i++) {
        const newLi = document.createElement("li");

        newLi.innerHTML =
          new Date(data.hourly.time[i]).toLocaleString() +
          ": " +
          data.hourly.temperature_2m[i] +
          " &#8451;";
        tempList.appendChild(newLi);
      }
        });
}

document
    .getElementById("weatherForm")
    .addEventListener("submit", showweatherDetails);
