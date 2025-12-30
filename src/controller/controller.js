import { getAPIData } from "../api/wheather.api.js";
import { updateScreen } from "../display/updateScreen.js";
import { updateState } from "../state/updateState.js";
import { getCity } from "../utils/utils.js";

const search = async () => {
  const city = getCity();
  try {
    const response = await getAPIData(city);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    updateState(data);
    updateScreen();
  } catch (err) {
    updateState(null);
    updateScreen();
  }
};

export { search };
