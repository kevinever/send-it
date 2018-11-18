
//importing express framework to help in data structure 
const express = require('express');

//assigning express to an app variable 
const app = express();

//to display the output on our console 
const morgan = require('morgan');



const parcelsRoutes = require('./api/v1/routes/parcels');
const orderRoutes = require('./api/v1/routes/orders');

app.use(morgan('dev'));

app.use('/parcels', parcelsRoutes);
app.use('/orders', orderRoutes);

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