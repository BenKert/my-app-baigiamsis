import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import UserRoutes from "./UserRoutes.js";
import QuestionRoutes from "./QuestionRoutes.js";
import TagRoutes from "./TagRoutes.js";

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

app.use(UserRoutes);
app.use(QuestionRoutes);
app.use(TagRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
