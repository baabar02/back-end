const { error } = require("console");
const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const fs = require("fs");

app.get("/to-do", async (req, res) => {
  try {
    const data = await fs.readFileSync("./todo.json", "utf-8");

    res.send(data);
  } catch {
    error;
  }

  res.status(200).send(data);
});

app.post("/to-do", async (req, res) => {
  await fs.writeFileSync("./todo.json", JSON.stringify(req.body), "utf-8");

  res.send("Successfully");
});

app.put("/to-do", async (req, res) => {
  try {
    const data = await fs.readFileSync("./todo.json", "utf-8");
    const result = JSON.parse(data);

    const dataJSon = { ...result, task: req.body.task };

    await fs.writeFileSync("./todo.json", JSON.stringify(dataJSon), "utf-8");

    res.send("successully");
  } catch {
    error;
  }
  res.send("aldaa");
});

// app.put("/to-do", async (req, res) => {
//   const data = await fs.readFileSync("./todo.json", "utf-8");
//   const result = JSON.parse(data);
//   const newTask = "hoolloh";
//   if (!newTask) {
//     result.task = newTask;
//   }
//   await fs.writeFileSync("./todo.json", JSON.stringify(result), "utf-8");
//   res.send("new task added");
// });

app.listen(port, () => {
  console.log(`example to-do app listening on port ${port}`);
});
