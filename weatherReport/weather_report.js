function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    const apiKey = "92b1e6384db2868d99fc908e6cc64d3e"; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<h2>Weather in latitude: ${data.latitude}, longitude: ${data.longitude}</h2>
                                    <p>Temperature: ${data.current.temperature_2m} &#8451;</p>`;
        });
}

document
    .getElementById("weatherForm")
    .addEventListener("submit", showweatherDetails);
