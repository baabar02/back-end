const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const fs = require("fs");

app.get("/adduser", (req, res) => {
  const data = fs.readFileSync("./users.json", "utf-8");
  res.send(data);
});

app.post("/adduser", async (req, res) => {
  await fs.writeFileSync("./users.json", JSON.stringify(req.body), "utf-8");
  res.send("Successfully ");
});

app.put("/adduser", async (req, res) => {
  const data = await fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  dataJSON = { ...result, userName: "Tengis" };
  await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
  res.send("UserName updated");
});

app.put("/add", async (req, res) => {
  const data = await fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  dataJSON = { ...result, phone: "99999911" };
  await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
  res.send("phone updated");
});

app.delete("/add", async (req, res) => {
  const data = await fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  const { age, ...rest } = result;
  const dataJSON = rest;
  await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
  res.send("age deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});

// const array = [];
// const newArray = [{ name: "baabar", password: "password" }];

// app.post("/test", (req, res) => {
//   array.push(req.body);

//   res.send("amjilttai");
// });

// app.get("/test", (req, res) => {
//   res.status(200).send(array);
// });

// const array = [1, 2, 3, 4];

// app.get("/movie/popularlanguage=en-US&page=1", (req, res) => {
//   res.status(200).send([
//     {
//       id: "123",
//       title: "Minecraft",
//       description: "Nice movie for children",
//     },
//   ]);
// });

// app.get("/test", (req, res) => {
//   res.status(200).send(array);
// });

// app.get("/test", (req, res) => {});

// app.post("/test", (req, res) => {
//   array.push("5");
//   res.status(200).send("successfully created");
// });

// app.delete("/test", (req, res) => {
//   array.shift();
//   res.status(200).send("successfully deleted");
// });

// app.post("/init", (req, res) => {
//   array.pop();
//   res.status(200).send("successfully removed last element");
// });

// app.post("/reset", (req, res) => {
//   array[0] = 1;
//   array[1] = 2;
//   array[2] = 3;
//   array[3] = 4;
//   res.send("successully reset");
// });
