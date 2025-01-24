require('dotenv').config({path: "./config.env"});
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const path = require('path');

const app = express();

// get data from body
app.use(express.json());

// Authorised access
app.use('/api/private', require('./routes/private'));


// redirect to auth 
app.use('/api/auth', require('./routes/auth'));  
app.use('/api/search', require('./routes/search'));  
app.use('/api/product', require('./routes/product'));  
app.use('/api/cart', require('./routes/cart'));  



// Error Handler (last piece of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise)=>{ 
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
})   