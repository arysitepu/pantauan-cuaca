document.addEventListener("DOMContentLoaded", function() {
    const getWeatherButton = document.getElementById("getWeatherButton");
    getWeatherButton.addEventListener("click", getWeather);
});

function getWeather(){
   const locationInput = document.getElementById("locationInput").value;
   const apiKey = '76d8992ee77343a85cc8145f14971151';
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`
   
   fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
        <span class="fw-bold">Cuaca di ${data.name}</span>
        <div class="alert alert-info mt-3">
            <p>Temperature: ${data.main.temp}°C </p>
            <p>Cuaca: ${data.weather[0].description}</p>
        </div>`;
   }).catch(error => {
        console.error('error weii', error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = '<p class="alert alert-danger">Hemm sepertinya anda salah memasukkan data</p>'
   });
}