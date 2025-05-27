const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo'); // ✅ Make sure this file exists

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log('📥 GET /api/todos — returned', todos.length, 'todos');
    res.json(todos);
  } catch (err) {
    console.error('❌ Error in GET /api/todos:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new todo
router.post('/', async (req, res) => {
  try {
    const { text, colorTag } = req.body;
    const newTodo = new Todo({ text, colorTag, completed: false });
    await newTodo.save();
    console.log('➕ POST /api/todos — created todo:', newTodo.text);
    res.status(201).json(newTodo);
  } catch (err) {
    console.error('❌ Error in POST /api/todos:', err);
    res.status(400).json({ error: 'Invalid todo data' });
  }
});

// PUT (update) a todo by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error('❌ Error in PUT /api/todos:', err);
    res.status(400).json({ error: 'Failed to update' });
  }
});

// DELETE a todo by ID
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    console.error('❌ Error in DELETE /api/todos:', err);
    res.status(400).json({ error: 'Failed to delete' });
  }
});

module.exports = router;
