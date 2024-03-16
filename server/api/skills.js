import fetchServer from "@/utils/fetchServer";

export default defineEventHandler(() => {
  return fetchServer("skills");
});
