import { API_KEY, SEARCH_ENDPOINT } from "../const/api";

export const getGifs = async (category) => {
  const url = `${SEARCH_ENDPOINT}?api_key=${API_KEY}&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images: { downsized_medium }}) => ({
    id,
    title,
    url: downsized_medium.url
  }))
  
  return gifs;
};