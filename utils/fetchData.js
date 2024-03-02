import { useFetch } from "#app";

export default async function fetchData(url) {
  try {
    const { data } = useFetch(url, {
      server: true,
    });
    return data;
  } catch (error) {
    console.error("There was an error fetching the data: ", error);
    return "Error fetching data";
  }
}
