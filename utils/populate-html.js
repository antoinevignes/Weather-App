import { capitalizeFirstLetter } from "./capitalize-letter.js";

const title = document.querySelector("#title");
const container = document.querySelector("#response");
const desc = document.querySelector("#desc");
const info = document.querySelector("#info");

export function populateHtml(data) {
  title.innerText = `${data.name}, ${data.sys.country}`;

  container.innerHTML = `<img src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@2x.png" alt="icon"/><p class="temp">${Math.floor(data.main.temp)}°C</p>`;

  desc.innerHTML = `<h2>${capitalizeFirstLetter(
    data.weather[0].description
  )}</h2>`;

  if (!data.rain) {
    info.innerHTML = `<p>Humidity : ${data.main.humidity}%</p>
    <p><i class="fa-solid fa-cloud-showers-heavy"></i> : none</p>
      <p><i class="fa-solid fa-wind"></i> : ${data.wind.speed}m/s`;
  } else {
    info.innerHTML = `<p>Humidity : ${data.main.humidity}%</p>
      <p><i class="fa-solid fa-cloud-showers-heavy"></i> : ${data.rain["1h"]}mm/h</p>
      <p><i class="fa-solid fa-wind"></i> : ${data.wind.speed}m/s`;
  }
}
