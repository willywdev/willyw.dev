import Pocketbase from "pocketbase";
/**
 * Fetches records from the server for a given collection.
 * @param {string} collectionName - The name of the collection to fetch records from.
 * @returns {Promise<Array>} - A promise that resolves to an array of records, or rejects with an error.
 */
export default async function fetchServer(collectionName) {
  const pb = new Pocketbase("https://pocketbase.caprover.42977775.xyz");
  try {
    const records = await pb.collection(collectionName).getFullList();
    return records;
  } catch (error) {
    return error;
  }
}
