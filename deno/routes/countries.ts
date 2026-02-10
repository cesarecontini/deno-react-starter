import { getAllCountries } from "../db/queries.countries.ts";
import { Context, Hono } from "hono";
import { addCorsHeaders } from "../main.ts";

const countriesRoute = new Hono();

countriesRoute.get("/", async (c: Context) => {
  const countries = await getAllCountries();
  return addCorsHeaders(c.json(countries));
});

export default countriesRoute;
