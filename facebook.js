
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

  const userExists = dataJSON.some(
    (el) =>
      el.email.toLowerCase() === req.body.email.toLowerCase() && el.mobileNumber === req.body.mobileNumber
  );
  if(userExists) {
    return res.status(400).send("Hereglegch burtgeltei baina")
  } 
dataJSON.push(req.body)
fs.writeFileSync("./fb.json", JSON.stringify(dataJSON), "utf-8")
res.status(200).send("successfully")
})


app.post("/signup", async(req,res)=>{
  const data = fs.readFileSync("./fb.json", "utf-8");
  const dataJSON = JSON.parse(data);
  const {firstName, lastName, birthday, email, mobileNumber} = req.body;
  const trimmedFirstName = firstName.trim();
  const trimmedLastname = lastName.trim();
  

  if(!firstName || !lastName || !birthday || !email || !mobileNumber) {

    return res.status(400).send("All fields (firstName, lastName, birthday, email, mobileNumber) are required")
  }

  const potentialDuplicate = dataJSON.find((el)=>el.firstName === trimmedFirstName && el.lastName === trimmedLastname && el.birthday === birthday ); 
  if(potentialDuplicate) {
    console.log("Warning: User with same name and birthday exists");
    
  }
//   const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
// if(birthdayRegex.test(birthday)){
//   return res.status(400).send("Birthday must be in YYYY-MM-DD format")
// }

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if(emailRegex.test(email)) {
//   return res.status(400).send("Invalid email format")
// }

const newUser = {
  id:dataJSON.lenght + 1,
  firstName: trimmedFirstName,
  lastName: trimmedLastname,
  birthday,
  email,
  mobileNumber
}

dataJSON.push(newUser)
fs.writeFileSync("./fb.json", JSON.stringify(dataJSON), "utf-8")
res.status(200).send("User registered successfully")
})

app.get("/", (req, res)=>{
  try{
 const data = fs.readFileSync("./fb.json", "utf-8");
  const dataJSON = JSON.parse(data);
  res.status(200).send(dataJSON)
  } catch (error) {
    res.status(500).send(`error reading dat ${error.message}`)
  }
 

})


app.listen(port, () => {
  console.log(`example to-do app listening on port ${port}`);
});
