const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /parcels'
    });
});

router.post('/', (req, res, next) => {
    const parcel ={
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST requests to /parcels',
        createdParcel: parcel
    });
});

router.get('/:parcelsId', (req, res, next) => {
    const id = req.params.parcelsId;
    if (id === '10') {
        res.status(200).json({
            message: 'Your parcel has been retrieved successfully',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:parcelsId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated parcel!'
    });
});

router.delete('/:parcelsId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted parcel!'
    });
});

module.exports = router;