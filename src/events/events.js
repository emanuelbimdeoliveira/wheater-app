import { search } from "../controller/controller.js";

const searchButton = document.querySelector("#search-button");
const inputCity = document.querySelector("#input-city");

const startReadingEvents = () => {
  searchButton.addEventListener("click", () => {
    search();
  });

  inputCity.addEventListener("keydown", (e) => {
    if (e.key === "Enter") search();
  });
};

export { startReadingEvents };
