// const { error } = require("console");
// const express = require("express");
// const app = express();
// const port = 8000;
// app.use(express.json());
// const fs = require("fs");

// app.get("/adduser", (req, res) => {
//   try {
//     const data = fs.readFileSync("./users.json", "utf-8");
//     res.status(200).send(data);
//   } catch {
//     error;
//   }
//   res.status(500).send(`error ${error}`);
// });

// app.post("/adduser", async (req, res) => {
//   try {
//     await fs.writeFileSync("./users.json", JSON.stringify(req.body), "utf-8");
//     res.send("Successfully ");
//   } catch {
//     error;
//   }
//   res.send("aldaa");
// });

// // app.put("/adduser", async (req, res) => {
// //   const data = await fs.readFileSync("./users.json", "utf-8");
// //   const result = JSON.parse(data);
// //   dataJSON = { ...result, userName: "Tengis" };
// //   await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
// //   res.send("UserName updated");
// // });

// // app.put("/add", async (req, res) => {
// //   const data = await fs.readFileSync("./users.json", "utf-8");
// //   const result = JSON.parse(data);
// //   dataJSON = { ...result, phone: "99999911" };
// //   await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
// //   res.send("phone updated");
// // });

// app.delete("/add", async (req, res) => {
//   const data = await fs.readFileSync("./users.json", "utf-8");
//   const result = JSON.parse(data);
//   const { age, ...rest } = result;
//   const dataJSON = rest;
//   await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
//   res.send("age deleted");
// });

// // app.patch("/add", async (req,res)=>{
// //   const data = await fs.readFileSync("./users.json", "utf-8")
// //   const result = JSON.parse(data)
// //   dataJSON ={...result, userName:"baabar"}
// //   await fs.writeFileSync("./users.json", JSON.stringify(dataJSON), "utf-8");
// //   res.send("userName patched")
// // })

// app.patch("/add", async (req, res) => {
//   try {
//     const data = fs.readFileSync("./users.json", "utf-8");
//     const result = JSON.parse(data);
//     result[1].userName = "Bat";
//     fs.writeFileSync("./users.json", JSON.stringify(result), "utf-8");
//     res.send("userName patched to Bat");
//     throw new Error();
//   } catch {
//     error;
//   }
//   res.send("patch aldaa");
// });

// app.put("/add", async (req, res) => {
//   const data = fs.readFileSync("./users.json", "utf-8");
//   const result = JSON.parse(data);
//   const newUsername = req.body.userName || "Bat";
//   if (!newUsername) {
//     return res.status(400).send("new user name required");
//   }
//   result[1].userName = newUsername;
//   fs.writeFileSync("./users.json", JSON.stringify(result), "utf-8");
//   res.send(`userName patched to ${newUsername}`);
// });

// app.put("/adduser", async (req, res) => {
//   const data = fs.readFileSync("./users.json", "utf-8");
//   const result = JSON.parse(data);
//   console.log(result, "hi");

//   // const status = "40";
//   // result.map((obj) => ({ ...obj, status }));

//   // dataJSON.push() = {...result, status }
//   res.send("added age successfully");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port${port}`);
// });
