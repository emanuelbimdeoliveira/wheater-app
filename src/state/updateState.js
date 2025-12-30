import { normalizeWeatherData } from "./normalizeData.js";
import { setState } from "./state.js";

const updateState = (data) => {
  const state = normalizeWeatherData(data);

  Object.entries(state).forEach(([key, value]) => {
    setState(key, value);
  });
};

export { updateState };
