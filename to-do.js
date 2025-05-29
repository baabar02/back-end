const { error } = require("console");
const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const fs = require("fs");
const todoArray = [];

const data = fs.readFileSync("./todo.json", "utf-8");
const dataJSON = JSON.parse(data);
app.get("/", async (req, res) => {
  try {
    res.status(200).send(dataJSON);
  } catch (error) {
    res.status(400).send(`file not found ${error.message}`);
  }
});

// app.post("/", async (req, res) => {
//   todoArray.push(req.body);
//   await fs.writeFileSync("./todo.json", JSON.stringify(todoArray), "utf-8");

//   res.send("Successfully");
// });

// app.put("/", async (req, res) => {
//   try {
//     const data = await fs.readFileSync("./todo.json", "utf-8");
//     const result = JSON.parse(data);

//     const dataJSon = { ...result, task: req.body.task };

//     await fs.writeFileSync("./todo.json", JSON.stringify(dataJSon), "utf-8");

//     res.send("successully");
//   } catch (error) {}
//   res.send(`aldaa${error.message}`);
// });

app.post("/", async (req, res) => {
  try {
    const result = [
      ...dataJSON,
      {
        task: req.body.task,
        id: req.body.id,
        isDone: req.body.isDone,
        userName: req.body.userName,
      },
    ];
    // todoArray.push(result);
    await fs.writeFileSync("./todo.json", JSON.stringify(result), "utf-8");
    res.send("successfully updated");
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/", async (req, res) => {
  const doneData = dataJSON.map((el) => {
    if (el.id === req.body.id) {
      return { ...el, isDone: req.body.isDone };
    } else {
      return el;
    }
  });
  await fs.writeFileSync("./todo.json", JSON.stringify(doneData), "utf-8");
  res.send("successfully Done");
});

app.patch("/");

app.delete("/", async (req, res) => {
  const deletedTask = dataJSON.filter((el) => {
    if (el.id !== req.body.id) {
      return el;
    }
  });
  await fs.writeFileSync("./todo.json", JSON.stringify(deletedTask), "utf-8");
  res.send("isDone deleted");
});

app.listen(port, () => {
  console.log(`example to-do app listening on port ${port}`);
});
