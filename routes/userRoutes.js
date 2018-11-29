import express from 'express';
import usersControllers from '../controllers/usersControllers';
import parcelControllers from '../controllers/parcelControllers';

const router = express.Router();

//fetch parcel by user id
router.get('/:userId/parcels', usersControllers.getusers);

// creating  new user
router.post('/', usersControllers.create);


//fetching all the parcels from our datastore
router.get('/', usersControllers.getusers);

//fetching only one parcel by id 

router.post('/auth/login', usersControllers.login);



//apdating only by canceling  our created user
//router.put('/:id/cancel',  usersControllers.canceluser);

//exportation of our router to enable them to use 
export default router;
