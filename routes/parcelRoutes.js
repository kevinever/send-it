//creating our routes to our parcels 

import express from 'express';
import parcelControllers from '../controllers/parcelControllers';
import protection from '../helpers/authentication';

//declaring our Router function to hell us in routing
const router = express.Router();
// creating  new parcel
router.post('/',protection.protectRoute, parcelControllers.create);

//fetching all the parcels from our datastore
router.get('/', parcelControllers.getParcels);

//fetching only one parcel by id 
router.get('/:id',  parcelControllers.getParcelById);

//apdating only by canceling  our created parcel
router.put('/:id/admin/status',  parcelControllers.cancelParcel);

//apdating only by canceling  our created parcel
router.put('/:id/destination',  parcelControllers.changeDestination);

//apdating only by canceling  our created parcel
router.put('/:id/location',  parcelControllers.changeLocation);


//exportation of our router to enable them to use 

export default router;


