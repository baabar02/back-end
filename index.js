const express = require("express");
const app = express();
const port = 8000;

const array = [1, 2, 3, 4];

// app.get("/movie/popularlanguage=en-US&page=1", (req, res) => {
//   res.status(200).send([
//     {
//       id: "123",
//       title: "Minecraft",
//       description: "Nice movie for children",
//     },
//   ]);
// });

app.get("/test", (req, res) => {
  res.status(200).send(array);
});

app.post("/test", (req, res) => {
  array.push("5");
  res.status(200).send("successfully created");
});

app.delete("/test", (req, res) => {
  array.shift();
  res.status(200).send("successfully deleted");
});

app.post("/init", (req, res) => {
  array.pop();
});

app.post("/reset", (req, res) => {
  array[0] = 1;
  array[1] = 2;
  array[2] = 3;
  array[3] = 4;
  res.send("successully resetted");
});

// app.get("/movie/popularlanguage=en-US&page=1", (id, res) => {
//   res.status(300).send([{ id: "234" }]);
// });
// app.get("/movie/upcominglanguage=en-US&page=1", (req, res) => {
//   res.send({ title: "bond" });
// });
// app.get("/movie/top_ratedlanguage=en-US&page=1", (req, res) => {
//   res.send({ id: "Error" });
// });
// app.get("/movie/now_playinglanguage=en-US&page=1", (req, res) => {
//   res.send({ id: "Error" });
// });

app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});
