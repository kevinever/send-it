import express from 'express';
import usersControllers from '../controllers/usersControllers';

const router=express.Router();

router.get('/:userId/users',parcelControllers.getParcelsOfUser);
router.post('/',usersControllers.create);
router.get('/',usersControllers.getParcels);
router.get('/:id',usersControllers.getParcelById);
router.put('/:id/cancel',usersControllers.cancelParcel);


export default router;
