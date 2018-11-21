
//credits
//with the help of  Acedemind tutorial i am going to be able to create my own api endpoint with their help i want to credit them my God bless their work  


//this server file will help us to create a listening server if none is available
//then by default the 911 server will be listening


//http is a node server module that helps us to create our own server
//we need then to import it by using require
import express from "express";
import bodyParser from 'body-parser';
import parcelRoutes from './routes/parcelRoutes';
import userRoutes from './routes/userRoutes'
import path from 'path';
import logger from 'morgan';

//const express = require('express');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/api/v1/parcels', parcelRoutes);
app.use('/api/v1/users', userRoutes);
//const app = require('');

const port = process.env.PORT || 3000;
console.log('port 3000 is listening ');
//const server = http.createServer(app);
app.listen(port);

export default app;