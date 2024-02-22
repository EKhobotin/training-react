import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export const fetchPosts = async (configParams) => {
  const { data } = await axios.get("posts", {
    params: {
      limit: 4,
      // якщо в конфін парамс прийдет об'єкт {limit: 10,} то ми зробимо запит з лімітом 10. якщо ні то з лімітом 4
      ...configParams,
    },
  });
  console.log(data);
  return data;
};

export const fetchPostsByQuery = async (configParams) => {
  const { data } = await axios.get("posts/search", {
    params: {
      limit: 4,
      ...configParams,
    },
  });
  console.log(data);
  return data;
};
