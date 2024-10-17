import Location from "./models/Location.js";
import { capitalizeFirstLetter } from "./utils/capitalize-letter.js";
import { clearHtml } from "./utils/clear-html.js";
import { populateHtml } from "./utils/populate-html.js";

document.addEventListener("DOMContentLoaded", async () => {
  const searchForm = document.querySelector("#search");
  const response = document.querySelector("#response");

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputValue = searchForm.querySelector('input[type="text"]').value;
    const location = new Location(inputValue);
    const data = await location.getWeather(location._location);

    try {
      populateHtml(data);
    } catch (error) {
      clearHtml();
      response.innerHTML = `<p id="error">${capitalizeFirstLetter(
        data.message
      )}</p>`;
    }
  });
});
