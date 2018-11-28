//creating our routes to our parcels 

import express from 'express';
import parcelControllers from '../controllers/parcelControllers'
//declaring our Router function to hell us in routing
const router = express.Router();
// creating  new parcel
router.post('/',  parcelControllers.create);

//fetching all the parcels from our datastore
router.get('/',  parcelControllers.getParcels);

//fetching only one parcel by id 
router.get('/:id',  parcelControllers.getParcelById);

//apdating only by canceling  our created parcel
router.put('/:id/cancel',  parcelControllers.cancelParcel);


//exportation of our router to enable them to use 

export default router;


