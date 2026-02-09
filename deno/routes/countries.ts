import { getAllCountries } from "../db/queries.countries.ts";
import { Hono, Context } from "hono";

const countriesRoute = new Hono()

countriesRoute.get('/', async (c: Context) => {
  const countries = await getAllCountries()
  return c.json(countries)
})

export default countriesRoute