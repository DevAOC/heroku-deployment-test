import { Client } from "@gadget-client/heroku-deployment-test";

export const api = new Client({
  environment:
    process.env.NODE_ENV === "production" ? "Production" : "Development",
});
