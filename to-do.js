const { error } = require("console");
const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const fs = require("fs");
const todoArray = []

app.get("/", async (req, res) => {
  try {
    const data = await fs.readFileSync("./todo.json", "utf-8");
    const dataJSON = JSON.parse(data)
    res.status(200).send(dataJSON);
  } catch (error) {
    res.status(400).send(`file not found ${error.message}`);
  } 
});

app.post("/", async (req, res) => {

  todoArray.push(req.body)
  await fs.writeFileSync("./todo.json", JSON.stringify(todoArray), "utf-8");

  res.send("Successfully");
});

app.put("/", async (req, res) => {
  try {
    const data = await fs.readFileSync("./todo.json", "utf-8");
    const result = JSON.parse(data);

    const dataJSon = { ...result, task: req.body.task };

    await fs.writeFileSync("./todo.json", JSON.stringify(dataJSon), "utf-8");

    res.send("successully");
  } catch (error) {
  }
  res.send(`aldaa${error.message}`);
});




const data = fs.readFileSync("./todo.json", "utf-8")
const dataJSON = JSON.parse(data)
 
app.post("/", async(req, res)=>{
  try{
    const result =[...dataJSON,{task: req.body.task, id:req.body.id, isDone:req.body.isDone, userName:req.body.userName},];
    await fs.writeFileSync("./todo.json", JSON.stringify(result),"utf-8");
    res.send("successfully updated");
  } catch (error) {
    res.send(error.message);
  }
})

app.put("/", async(req, res)=>{
  const doneData = dataJSON.map((el)=>{
    if(el.id === req.body.id) {
      return {...el, ...req.body};
    } else {
      return el;
    }
  });
  await fs.writeFileSync("./todo.json", JSON.stringify(doneData), "utf-8");
  res.send("successfully Done")
});
 
app.delete("/:id", async(req, res)=>{

  const {id} =req.body
if(!id) {
  return res.status(400).json({error:"id is required"})
}
try {
const data = await fs.readFile("./todo.json", "utf-8");
    const dataJSON = JSON.parse(data);
}  catch(error) {
  if(error.code === "ENOENT") {
    dataJSON =[]
  } else {
    throw error;
  }
}

  const deletedData = dataJSON.filter((el)=> el.id !== id);

    if(deletedData.lenght === dataJSON.lenght) {
      return res.send(404).json({error:"to-do not found"})
    }
  ;
  await fs.writeFileSync("./todo.json", JSON.stringify(deletedData),"utf-8");
  res.send.json("Deleted")
})
 
 

app.listen(port, () => {
  console.log(`example to-do app listening on port ${port}`);
});