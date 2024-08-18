import { QUERY_LIMIT } from "@/app/page";
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
    url:
      `${API}/search?select=id,title,discountPercentage,thumbnail,price,availabilityStatus&` +
      `limit=${QUERY_LIMIT}&skip=${(query.page - 1 || 0) * QUERY_LIMIT}&`,
    query,
  });

  return result
};

export const getProductsInCategory = async ({id, query }) => {
  const result = await Fetch({
    url: `${API}/category/${id}?select=id,title,discountPercentage,price,thumbnail,availabilityStatus&`,
    query,
  });

  return result;
};
