const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);
const row = document.createElement("div");
row.classList.add("row");
container.append(row);
const weatherInfo = document.createElement("div");
weatherInfo.classList.add("weather-info");
document.body.appendChild(weatherInfo);

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      
      let col = document.createElement("div");
      col.classList.add("col-lg-4", "col-sm-12");
      row.append(col);
      const cardDiv = document.createElement("div");
      cardDiv.innerHTML = `
        <div class="card">
           <h1 id="title" class="text-center card-header">${ele[i].name.common}</h1>
            <img src="${ele[i].flags.png}" class="card-img-top" alt="country-flag">
          <div class="card-body">
            <p class="card-text"><b>Capital: ${ele[i].capital}</b></p>
            <p class="card-text"><b>Region: ${ele[i].region}</b></p>
            <p class="card-text"><b>Country Code: ${ele[i].latlng}</b></p>
            <p class="card-text"><b>Country Code: ${ele[i].cca2}</b></p>
            <button class="btn btn-primary" onclick="getWeatherData('${ele[i].name.common}')">Click Here for weather</button>
            </div>    
        </div>
    </div>`
      col.append(cardDiv);
    }
  });
  //2e058a5c986acfe99cac939f7633466c API key 

  function getWeatherData(restCountryName) {
    let apiKey = "2e058a5c986acfe99cac939f7633466c";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey}`;
  
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((weatherData) => {
        var weatherCountryName = weatherData.name; // Corrected property
  
        if (weatherCountryName === restCountryName) {
          weatherInfo.innerHTML = `
            <p>Weather in ${weatherData.name}, ${weatherData.sys.country}: ${weatherData.main.temp_min} min°C and ${weatherData.main.temp_max} max°C</p>
          `;
        } else {
          weatherInfo.innerHTML = `<p>Country names do not match.</p>`;
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data.");
      });
  }
  
  






