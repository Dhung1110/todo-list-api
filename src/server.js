const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
