const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/Todo");
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://Muthurajtodoapp:Muthurajtodoapp@todoapp.otmt03h.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
  app.get("/get", async (req, res) => {
    try {
      const result = await TodoModel.find({});
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  app.get("/update/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await TodoModel.find({ _id: id });
      res.json(result);
    } catch (err) {
      res.status(404).json({ message: "Todo not found" });
    }
  });
// app.get("/get", (req, res) => {
//   TodoModel.find({})
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });
// app.get("/update/:id", (req, res) => {
//   const id = req.params.id
  // TodoModel.find({_id:id})
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });
app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    //task: string
    task,
  })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  
  TodoModel.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      task: req.body.name,
      done: true,
    }
  )
    .then(() => res.json({ message: "Todo updated successfully" }))
    .catch((err) => res.status(500).json({ message: "Error updating todo", error: err }));
});
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.findByIdAndDelete({
    _id: id,
  })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("Server is running");
});
