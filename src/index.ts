import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";

const app = express();
app.use(json());
const PORT = 3000;

app.use(currentUserRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
