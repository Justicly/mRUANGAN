const express = require('express');
const connectDb = require('./config/dbConnection');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

connectDb();

app.use(express.json());
app.use('/api/mruangan', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
