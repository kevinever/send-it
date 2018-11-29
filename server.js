
//credits
//with the help of  Acedemind tutorial i am going to be able to create my own api endpoint with their help i want to credit them my God bless their work  




//http is a node server module that helps us to create our own server
//we need then to import it by using require
import express from "express";
import bodyParser from 'body-parser';
import parcelRoutes from './routes/parcelRoutes';
import userRoutes from './routes/userRoutes'
import path from 'path';
import logger from 'morgan';
import execute from './db/database';
import uuid from 'uuid';
import 'dotenv/config';

//const express = require('express');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use('/api/v2/parcels', parcelRoutes);
app.use('/api/v2/users', userRoutes);



app.use((req, res, next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});



// catch all un handled errors from
// this entire API application
app.use((err, req, res, next) => {
  // log the error...
  const status = err.httpStatusCode || 500;
  res.status(status).send({
    success: false,
    message: err.message,
  });
});


//creating parcels table
execute(`CREATE TABLE IF NOT EXISTS parcels (
  id UUID PRIMARY KEY,
  origin VARCHAR(20),
  destination VARCHAR(20),
  user_id UUID,
  created_date DATE, 
  price INT,
  presentLocation VARCHAR(20),
  weight INT,
  status VARCHAR(30)
)`);

//creating users table

execute(`CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  firstname VARCHAR(20),
  lastname VARCHAR(20),
  email VARCHAR(100),
  created_date DATE, 
  password VARCHAR(100),
  role VARCHAR(20)
)`);

//const app = require('');

const port = process.env.PORT || 4570;
console.log(`port ${port} is listening `);
//const server = http.createServer(app);
app.listen(port);

export default app;