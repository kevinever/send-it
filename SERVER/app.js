
//importing express framework to help in storing data structure 
const express = require('express');

//assigning express to an app variable 
const app = express();

//to display the output on our console 
const morgan = require('morgan');

//now we need a bodyparser to deal with our incoming request and from there we can then reuse our that data n.b:bp doesn't accept files

const bodyParser = require('body-parser');

const parcelsRoutes = require('./api/v1/controllers/parcels');
//onst orderRoutes = require('./api/v1/routes/orders');
//const usersRoutes = require('./api/v1/routes/users');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

//appending the incoming request from Cors
app.use((req, res, next) =>{
   res.header('Access-Control-Allow-Origin', '*');
   //ALSO let's append this headers cors to handle other incoming request
   res.header('Access-Control-Allow-Origin', 'origin, x-Requested-Width, Content-Type, Accept, Authorization');
 
 //check if the incoming request method(property which gives us the access to the http method used on the request) equals to options, browser will always send an option request first when you usedn a post request or a patch request this you can't avoid 
  if(req.method === 'OPTIONS'){

    //addition of header where i tell the browser what to send
       
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET'); 
        return res.status(200).json({});


  }
     next();
});


//Routes which should handle requests
app.use('/parcels', parcelsRoutes);
//app.use('/orders', orderRoutes);
//app.use('/users', usersRoutes);

app.use((req, res, next) =>{
   const error = new Error('not found');
   error.status = 404;
   next(error);
})


app.use((error, req, res, next) =>{
  res.status(error.status || 500);
  res.json({
      error:{
      	message: error.message
      }
  });
});
//interacting with the so-called middleware we use .use and pass some arguments to accep request, responds, and next to determine when the middleware is done its job and pass to the next middleware
/*app.use((req, res, next) => {
   res.status(200).json({
     message: 'it works!'

   });
  
});*/

module.exports = app;