const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
     /*const ConsignmentNo = req.params.parcelsConsignmentNo;
    const Origin = req.params.parcelsOrigin;
    const Destination = req.params.parcelsDestination;
    const Shippername = req.params.parcelsShippername;
    const receivername = req.params.parcelsreceivername;
    const weight = req.params.parcelsweight;
    const Shiptype = req.params.parcelsShiptype;
    const Receiverphone = req.params.parcelsReceiverphone;
    const Qnty = req.params.parcelQnty;
    const Bookingmode = req.params.parcelBookingmode;
    const Pickuptime = req.params.parcelPickuptime;
    const Comments= req.params.parcelComments*/
    
    res.status(200).json({
        message: 'Handling GET requests to /parcels',
        









      
        ConsignmentNo: '10',
            
            Origin: 'kigali',
            Destination: 'Gitarama',
            Shippername: 'kevin',
            receivername:'Ever',
            Receiverphone:'+250786746170',
            weight:'900kg',
            Qnty:'21',
            Bookingmode:'online',
            Packupdate:'18/11/2018',
            Pickuptime:'24/11/2018',
            Comments:'only the receiver should show the id in order to pick the parcel',
            Shiptype:'express',


            ConsignmentNo: 'ConsignmentNo',
            
            Origin: 'kigali',
            Destination: 'Kampala',
            Shippername: 'kevin',
            receivername:'Ever',
            Receiverphone:'+256786746171',
            weight:'10kg',
            Qnty:'12',
            Bookingmode:'online',
            Packupdate:'18/11/2018',
            Pickuptime:'24/11/2018',
            Comments:'only the receiver should show the id in order to pick the parcel',
            Shiptype:'express'


    });
});

router.post('/', (req, res, next) => {
    const parcel ={
        id: req.body.id,
        Shippername: req.body.Shippername,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST requests to /parcels',
                createdParcel: parcel
    });
});

router.get('/:parcelsConsignmentNo', (req, res, next) => {
    const ConsignmentNo = req.params.parcelsConsignmentNo;
    const Origin = req.params.parcelsOrigin;
    const Destination = req.params.parcelsDestination;
    const Shippername = req.params.parcelsShippername;
    const receivername = req.params.parcelsreceivername;
    const weight = req.params.parcelsweight;
    const Shiptype = req.params.parcelsShiptype;
    const Receiverphone = req.params.parcelsReceiverphone;
    const Qnty = req.params.parcelQnty;
    const Bookingmode = req.params.parcelBookingmode;
    const Pickuptime = req.params.parcelPickuptime;
    const Comments= req.params.parcelComments


    //const ConsignmentNo = req.params.parcelsConsignmentNo;
    if (ConsignmentNo === '10') {

        res.status(200).json({
            message: 'Your parcel has been retrieved successfully',
            ConsignmentNo: ConsignmentNo,
            
            Origin: 'kigali',
            Destination: 'Gitarama',
            Shippername: 'kevin',
            receivername:'Ever',
            Receiverphone:'+250786746170',
            weight:'900kg',
            Qnty:'21',
            Bookingmode:'online',
            Packupdate:'18/11/2018',
            Pickuptime:'24/11/2018',
            Comments:'only the receiver should show the id in order to pick the parcel',
            Shiptype:'express'

        });

                 
    } 

          

       if (ConsignmentNo === '11') {

        res.status(200).json({
            message: 'Your parcel has been retrieved successfully',
            ConsignmentNo: ConsignmentNo,
            
            Origin: 'kigali',
            Destination: 'Kampala',
            Shippername: 'kevin',
            receivername:'Ever',
            Receiverphone:'+256786746171',
            weight:'10kg',
            Qnty:'12',
            Bookingmode:'online',
            Packupdate:'18/11/2018',
            Pickuptime:'24/11/2018',
            Comments:'only the receiver should show the id in order to pick the parcel',
            Shiptype:'express'

        });

                 
    }          

         

                 if (ConsignmentNo === '12') {

        res.status(200).json({
            message: 'Your parcel has been retrieved successfully\n',
            ConsignmentNo: ConsignmentNo,
            
            Origin: 'nairobi',
            Destination: 'lagos',
            Shippername: 'kevin',
            receivername:'Ever',
            Receiverphone:'+253786546173',
            weight:'900kg',
            Qnty:'2',
            Bookingmode:'online',
            Packupdate:'18/11/2018',
            Pickuptime:'24/11/2018',
            Comments:'only the receiver should show the id in order to pick the parcel',
            Shiptype:'express'

        });

                 
    } 



    else {
        res.status(404).json({
            message: 'parcel not found'
        });
    }
});

router.patch('/:parcelsConsignmentNo', (req, res, next) => {
    res.status(200).json({
        message: 'Updated parcel!'
    });
});

router.delete('/:parcelsConsignmentNo', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted parcel!'
    });
});

module.exports = router;