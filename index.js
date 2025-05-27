

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

// app.put("/add", async (req, res) => {
//   const data = await fs.readFileSync("./users.json", "utf-8");
//   const result = JSON.parse(data);
//   dataJSON = { ...result, phone: "99999911" };
//   await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
//   res.send("phone updated");
// });



app.delete("/add", async (req, res) => {
  const data = await fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  const { age, ...rest } = result;
  const dataJSON = rest;
  await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
  res.send("age deleted");
});

// app.patch("/add", async (req,res)=>{
//   const data = await fs.readFileSync("./users.json", "utf-8")
//   const result = JSON.parse(data)
//   dataJSON ={...result, userName:"baabar"}
//   await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
//   res.send("userName patched")
// })

app.patch("/add", async (req, res) => {
  const data = fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  result[1].userName = "Bat"; 
  fs.writeFileSync("./users.json", JSON.stringify(result), "utf-8");
  res.send("userName patched to Bat");
});

app.put("/add", async (req, res) => {
  const data = fs.readFileSync("./users.json", "utf-8");
  const result = JSON.parse(data);
  const newUsername = req.body.userName || "Bat";
  if (!newUsername) {
    return res.status(400).send("new user name required");
  }
  result[1].userName = newUsername; 
  fs.writeFileSync("./users.json", JSON.stringify(result), "utf-8");
  res.send(`userName patched to ${newUsername}`);
});







app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});


