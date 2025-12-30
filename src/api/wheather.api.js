import { buildUrl } from "../utils/utils.js";

const getAPIData = async (city) => {
  return await fetch(buildUrl(city));
};

export { getAPIData };
