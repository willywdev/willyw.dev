import Pocketbase from "pocketbase";

export default defineEventHandler(async () => {
  const pb = new Pocketbase("https://pocketbase.caprover.42977775.xyz");
  try {
    const records = await pb.collection("skills").getFullList();
    return records;
  } catch (error) {
    return error;
  }
});
