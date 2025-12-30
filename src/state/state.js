const state = {
  apiKey: "7682f330cc7fe214f54b97cd88840535",
  cityName: "Cidade não encontrada",
  flagName: "--",
  temperature: "--",
  weatherNow: "--",
  weatherIcon: "--",
  humidity: "--",
  windSpeed: "--",
  feelsLike: "--",
};

const setState = (key, value) => {
  state[key] = value;
};

export { state, setState };
