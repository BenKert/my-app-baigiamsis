import express from "express";
import jwt from "jsonwebtoken";
import knex from "knex";
import bcrypt from "bcrypt";

const db = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "sinsila",
    database: "Baigiamasis",
  },
});

const UserRoutes = express.Router();
const secret = "secret123";

UserRoutes.get("/profile", (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, secret, (err, data) => {
    if (err) {
      res.status(403).send();
    } else {
      res.json(data).send();
    }
  });
});

UserRoutes.post("/login", (req, res) => {
  const { email, password } = req.body;
  const isLoginOk = email === "test@example.com" && password === "test";
  isLoginOk &&
    jwt.sign(email, secret, (err, token) => {
      if (err) {
        res.status(403).send(err);
      } else {
        res.cookie("token", token).send();
      }
    });

  if (!isLoginOk) {
    res.status(403).send();
  }
});

UserRoutes.post("/register", (req, res) => {
  const { email, password } = req.body;
  db.select("*")
    .from("users")
    .where({ email })
    .then((rows) => {
      if (rows.length === 0) {
        const hashedPassword = bcrypt.hashSync(password);
        db("users").insert({ email, password: hashedPassword });
        res.status(201).send("User created");
      } else {
        res.status(422).send("Email already exists");
      }
    })
    .catch((e) => res.status(422).send(e));
});
export default UserRoutes;
