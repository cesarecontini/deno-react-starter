import { Context, Hono } from "hono";
import countriesRoute from "./routes/countries.ts";

const app = new Hono();
app.get("/health", (c: Context) => {
  return c.json({ message: "ok" });
});
app.route("/countries", countriesRoute);
app.route("/api/v1", app);
Deno.serve(app.fetch);
