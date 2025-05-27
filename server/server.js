const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

console.log('✅ Mounting /api/todos route');
app.use('/api/todos', require('./routes/todos'));


app.use('/api/todos', require('./routes/todos'));
app.use('/api/logs', require('./routes/logs'));
app.use('/api/plans', require('./routes/plans'));


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
