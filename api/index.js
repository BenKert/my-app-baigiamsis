import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import UserRoutes from "./UserRoutes.js";

const app = express();
const port = 3030;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(UserRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
