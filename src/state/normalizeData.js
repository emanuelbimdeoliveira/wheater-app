const normalizeWeatherData = (data) => {
  if (!data || !data.sys || !data.weather) {
    return {
      cityName: "Cidade não encontrada",
      flagName: `https://flagsapi.com/BR/shiny/64.png`,
      temperature: "--",
      weatherNow: "--",
      weatherIcon: `https://openweathermap.org/img/wn/04d.png`,
      humidity: "--",
      windSpeed: "--",
      feelsLike: "--",
    };
  }

  const country = data.sys.country;
  const icon = data.weather[0].icon;

  return {
    cityName: data.name,
    flagName: `https://flagsapi.com/${country}/shiny/64.png`,
    temperature: `${Math.round(data.main.temp)}°`,
    weatherNow: data.weather[0].description,
    weatherIcon: `https://openweathermap.org/img/wn/${icon}.png`,
    humidity: `${data.main.humidity}%`,
    windSpeed: `${Math.round(data.wind.speed)} km/h`,
    feelsLike: `${Math.round(data.main.feels_like)}°`,
  };
};
export { normalizeWeatherData };
