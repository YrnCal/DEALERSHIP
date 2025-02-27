import { client } from "~/utils/connection";
import { json } from "@remix-run/node";

export async function loader() {
  try {
    await client.connect();
    const db = client.db("AUTOVERO");
    const cars = await db.collection("cars").find().toArray();
    return json(cars);
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return json({ error: "Failed to fetch cars" }, { status: 500 });
  }
}
