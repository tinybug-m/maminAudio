import axios from "axios";

export const getPostsApi = (category: string) => {
  const url = `https://api.maminaudio.com/wp-json/my/v1/crte/1?tags=${category}`;
  return axios.get(url);
};
