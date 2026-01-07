import express from "express";
import cors from "cors";
import { BlogRoutes } from "./src/routes/blog.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/blog", BlogRoutes);
const port = 5050;

app.listen(port, () => {
  console.log(`Server is listening at ${port}.`);
});
