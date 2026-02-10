import { Context, Hono } from "hono";
import countriesRoute from "./routes/countries.ts";

export function addCorsHeaders(res: Response) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );
  return res;
}

const app = new Hono();
app.get("/health", (c: Context) => {
  return addCorsHeaders(
    c.json({ message: "ok", env: Deno.env.get("DENO_ENV") }),
  );
});
app.route("/countries", countriesRoute);
app.route("/api/v1", app);
Deno.serve(app.fetch);
