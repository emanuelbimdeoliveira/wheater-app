import { state } from "../state/state.js";

const apikey = state.apiKey;

const getCity = () => {
  const inputCity = document.querySelector("#input-city");
  return inputCity.value.trim() || "brasilia";
};

const buildUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?&q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

export { buildUrl, getCity };
