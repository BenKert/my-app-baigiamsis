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
  db.select("password")
    .where({ email })
    .from("users")
    .first()
    .then((user) => {
      const isLoginOk = bcrypt.compareSync(password, user.password);
      isLoginOk &&
        jwt.sign(email, secret, (err, token) => {
          if (err) {
            res.status(403).send(err);
          } else {
            res.cookie("token", token).send("OK");
          }
        });

      if (!isLoginOk) {
        res.status(403).send("Username or password is not correct");
      }
    })
    .catch((e) => {
      res.status(422).send("something went wrong");
    });
});

UserRoutes.post("/register", (req, res) => {
  const { email, password } = req.body;
  db.select("*")
    .from("users")
    .where({ email })
    .then((rows) => {
      if (rows.length === 0) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        db("users")
          .insert({ email, password: hashedPassword })
          .then(() => {
            jwt.sign(email, secret, (err, token) => {
              if (err) res.sendStatus(403);
              else {
                res.cookie("token", token).status(201).send("User created");
              }
            });
          })
          .catch((e) => {
            res.status(422).send("User creation failed");
          });
      } else {
        res.status(422).send("Email already exists. Please try to login");
      }
    })
    .catch((e) => res.status(422).send(e));
});

UserRoutes.post("/logout", (req, res) => {
  res.clearCookie("token").send("ok");
});
export default UserRoutes;
