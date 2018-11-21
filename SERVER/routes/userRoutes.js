import express from 'express';
import parcelControllers from '../controllers/parcelControllers';

const router=express.Router();

router.get('/:userId/parcels',parcelControllers.getParcelsOfUser);

export default router;
