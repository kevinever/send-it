import express from 'express';
import usersControllers from '../controllers/usersControllers';
import parcelControllers from '../controllers/parcelControllers';

const router=express.Router();

router.get('/:userId/usersId', parcelControllers.getParcelsOfUser);

// creating  new user
router.post('/',  usersControllers.create);


//fetching all the parcels from our datastore
router.get('/',  usersControllers.getuserss);

//fetching only one parcel by id 

router.get('/:id',    usersControllers.getuserById);


//apdating only by canceling  our created user
router.put('/:id/cancel',  usersControllers.canceluser);

//exportation of our router to enable them to use 
export default router;
