import { db } from "./db.ts";
import { countries } from "./schema.ts";

const getAllCountries = async () => {
  return await db.select().from(countries);
};

export { getAllCountries };