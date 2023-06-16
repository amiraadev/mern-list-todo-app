require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))

const PORT = 3001 || process.env.PORT
const url_mongo = process.env.MONGO_DB_URI;

mongoose.connect(url_mongo,{
    useNewUrlParser:true,
}).then(() => console.log("DATA BASE successfully connected... "))
.catch(console.error())


const Todo = require('./models/Todo.js')

app.get('/todos', async (req,res) =>{
    const todos = await Todo.find();
    res.json(todos);
})

app.post('/todo/new',  (req,res) =>{
    const todo = new Todo({
        text:req.body.text
    });
    todo.save();
    res.json(todo)
})

app.delete('/todo/delete/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
      });
  });

  app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo); // Corrected response variable
});
  
app.listen(PORT,() => console.log(`server is running on port ${PORT}`))


