const apiKey = "cc19f50ed7117f432ed0d06a1ff5c43a";
const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector(".header input");
const searchbtn = document.querySelector(".header i");
const wCondition = document.querySelector(".weather-img");
const background = document.querySelector(".full-content");

async function checkWeater(place) {
  const res = await fetch(URL + place + `&appid=${apiKey}`);
  var data = await res.json();
  console.log(data);

  // to display the data of ech element from the api
  document.querySelector(".place").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clouds") {
    wCondition.src = "img/clouds.png";
  }
  if (data.weather[0].main == "Clear") {
    wCondition.src = "img/sun.png";
  }
  if (data.weather[0].main == "Rain") {
    wCondition.src = "img/rain.png";
  }
  if (data.weather[0].main == "Drizzle") {
    wCondition.src = "img/drizzle.png";
  }
  if (data.weather[0].main == "Mist") {
    wCondition.src = "img/mist.png";
  }

  document.querySelector(".place-text").style.display = "none";
  document.querySelector(".full-content").style.display = "block";
}

searchbtn.addEventListener("click", () => {
  checkWeater(searchInput.value);
});
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchbtn.click();
  }
});
