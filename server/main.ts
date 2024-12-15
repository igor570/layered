import express, { Response } from "npm:express@5.0.1";
import { db } from "./db/db.ts";

const app = express();

app.get("/", (res: Response) => {
  res.send("Hello World");
});

app.get("/users", async (req: Request, res: Response) => {
  const { data, error } = await db.from("test").select("*");

  if (error) throw new Error("Couldn't fetch test data");

  return await res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
