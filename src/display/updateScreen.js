import { state } from "../state/state.js";

const ui = {
  cityName: document.querySelector("#city-name"),
  flagName: document.querySelector("#flag-name"),
  temperature: document.querySelector("#temperature"),
  weatherNow: document.querySelector("#weather-now"),
  weatherIcon: document.querySelector("#weather-icon"),
  humidity: document.querySelector("#humidity"),
  windSpeed: document.querySelector("#wind-speed"),
  feelsLike: document.querySelector("#feels-like"),
};

const updateScreen = () => {
  ui.cityName.textContent = state.cityName;
  ui.flagName.src = state.flagName;
  ui.temperature.textContent = state.temperature;
  ui.weatherNow.textContent = state.weatherNow;
  ui.weatherIcon.src = state.weatherIcon;
  ui.humidity.textContent = state.humidity;
  ui.windSpeed.textContent = state.windSpeed;
  ui.feelsLike.textContent = state.feelsLike;
};

export { updateScreen };
