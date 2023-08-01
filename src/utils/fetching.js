import axios from "axios";

const BORED_API_BASE_URL = "https://www.boredapi.com/api/activity";

export const fetchActivity = async (abortController, participants = 1) => {
  try {
    const response = await axios({
      method: "get",
      url: BORED_API_BASE_URL + `?participants=${participants}`,
      signal: abortController?.signal,
    });
    return response;
  } catch (error) {
    return error;
  }
};
