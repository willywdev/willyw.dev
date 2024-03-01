import Pocketbase from "pocketbase";

export default defineEventHandler(async (event) => {
  const pb = new Pocketbase("https://pocketbase.caprover.42977775.xyz");
  const { admin, password } = useRuntimeConfig(event);
  const auth = await pb.admins.authWithPassword(admin, password);
  const { visitors } = await pb.collection("counter").getOne("z2dwosqqx6pyfrn");

  const record = await pb.collection("counter").update("z2dwosqqx6pyfrn", {
    visitors: visitors + 1,
  });
});
