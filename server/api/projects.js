import Pocketbase from "pocketbase";

export default defineEventHandler(async (event) => {
  const pb = new Pocketbase("https://pocketbase.caprover.42977775.xyz");
  try {
    const records = await pb.collection("portfolio_projects").getFullList();
    return records;
  } catch (error) {
    return error;
  }
});
