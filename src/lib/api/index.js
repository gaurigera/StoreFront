import { Fetch } from "./fetcher";

const API = `https://dummyjson.com/products`;

export const getProduct = async (id) => {
  const result = await Fetch({
    url: `${API}/${id}`,
  });
  return result;
};

export const getProducts = async ({ query }) => {  
  const result = await Fetch({
    url: `${API}/search?select=id,title,discountPercentage,thumbnail,price&`,
    query,
  });

  return result
};

export const getProductsInCategory = async ({id, query }) => {
  const result = await Fetch({
    url: `${API}/category/${id}?select=id,title,discountPercentage,price,thumbnail&`,
    query,
  });

  return result;
};
