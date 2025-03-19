function showweatherDetails(event) {
      event.preventDefault();
       const lat = document.getElementById('lat').value;
       const lon = document.getElementById('lon').value;
      const apiKey = '266dc74b20b44aae56a1d94d8a94898d'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}}&appid={API key}`;

       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.weather}</h2>
                                  <p>Temperature: ${data.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
    }

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );