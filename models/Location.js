class Location {
  constructor(location) {
    this._location = location;
  }

  async getWeather(location) {
    const apiKey = "cf3d446e708730b22a30e7e49053883c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
}

export default Location;
