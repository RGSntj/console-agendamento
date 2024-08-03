import cron from "node-cron";

cron.schedule("*/2 * * * * *", () => {
  console.log("Executado");
});
