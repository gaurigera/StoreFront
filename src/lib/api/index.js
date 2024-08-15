import { Fetch } from "./fetcher";

const API = `https://dummyjson.com/products`;

export const getProduct = async (id) => {
  const result = await Fetch({
    url: `${API}/${id}`,
  });
  return result;
};

export const getProducts = async ({ query, reverse, sortKey }) => {  
  const result = await Fetch({
    url: `${API}/search?`,
    query
  });

  return result
};
