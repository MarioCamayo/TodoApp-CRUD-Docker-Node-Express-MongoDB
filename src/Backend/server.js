const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

const Todo = mongoose.model('Todo', {
  title: String,
  done: Boolean
});

// app.get('/todos', async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

// app.post('/todos', async (req, res) => {
//   const todo = new Todo(req.body);
//   await todo.save();
//   res.status(201).json(todo);
// });


// 📥 CREATE
app.post('/todos', async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.status(201).json(todo);
});

// 📤 READ
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// 🔄 UPDATE
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  if (!todo) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(todo);
});

// ❌ DELETE
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Todo.findByIdAndDelete(id);
  if (!result) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json({ message: 'Tarea eliminada' });
});


app.listen(3000, () => console.log('Servidor en puerto 3000'));
