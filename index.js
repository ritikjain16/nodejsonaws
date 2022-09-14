import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World! from Node JS on AWS</h1>");
});

app.get("/det", (req, res) => {
  res.status(200).send({ name: "Ritik", age: 22 });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
