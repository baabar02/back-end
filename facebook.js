const { error } = require("console");
const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const fs = require("fs");

app.get("/", async (req, res) => {
  const data = fs.readFileSync("./fb.json", "utf-8");
  const dataJSON = JSON.parse(data);

  try {
    res.status(200).send(dataJSON);
  } catch (error) {
    res.status(400).send(`file not found ${error.message}`);
  }
});

app.post("/", async (req, res) => {
  const data = fs.readFileSync("./fb.json", "utf-8");
  const dataJSON = JSON.parse(data);

  const userExisting = dataJSON.find(
    (el) =>
      el.email === req.body.email && el.mobileNumber === req.body.mobileNumber
  );
  const userEmail = dataJSON.find((el) => el.email === req.body.email);
  if (userExisting) {
    return res.send("Hereglegch burtgeltei baina");
  } else if (userEmail) {
    return res.send("Hereglegch burtgeltei baina");
  } else {
    dataJSON.push(req.body);
    await fs.writeFileSync("./fb.json", JSON.stringify(dataJSON), "utf-8");
    return res.send("successfully");
  }
});

// app.put("/", async (req, res) => {
//   const data = fs.readFileSync("./fb.json", "utf-8");
//   const dataJSON = JSON.parse(data);
//   const userEmail = dataJSON.find((el) => {
//     if (el.email !== req.body.email) {
//       return { ...el, email: req.body.email };
//     } else {
//       return el;
//     }
//   });

//   await fs.writeFileSync("./fb.json", JSON.stringify(userEmail), "utf-8");
//   res.send("successfully");
// });

// app.post("/", async (req, res) => {
//   const result = [
//     ...dataJSON,
//     {
//       password: req.body.password,
//       id: req.body.id,
//       mobileNumber: req.body.mobileNumber,
//       email: req.body.email,
//     },
//   ];
//   Arr.push(result);
//   await fs.writeFileSync("./todo.json", JSON.stringify(result), "utf-8");
//   res.send("successfully");
// });

app.listen(port, () => {
  console.log(`example to-do app listening on port ${port}`);
});
