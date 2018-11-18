
//importing express framework to help in data structure 
const express = require('express');

//assigning express to an app variable 
const app = express();



const parcelsRoutes = require('./api/v1/routes/parcels');
//const orderRoutes = require('./api/routes/order');

app.use('/parcels', parcelsRoutes);
//app.use('/order', orderRoutes);




//interacting with the so-called middleware we use .use and pass some arguments to accep request, responds, and next to determine when the middleware is done its job and pass to the next middleware
/*app.use((req, res, next) => {
   res.status(200).json({
     message: 'it works!'

   });
  
});*/

module.exports = app;