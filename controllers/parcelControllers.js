//we are gong to create our controllers to of our app to run on
//importing parcels from our data dummies arrays
import parcels from '../data/parcelData';
import execute from '../db/database';
//id will be generated automatically as identifier of our parcels
import uuid from 'uuid';

//declaration of our controller that will help to CRUD as we want our created parcels

//creating a parcelcontroler object  that will be used in CRUD
const parcelController={
    create(req, res){
        const{ origin, destination, weight }=req.body;
        const newParcel={
            id:(parcels.length+1).toString(),
            userId:uuid.v4(),
            origin,
            destination,
            weight,
            createdDate:new Date(),
            status:"pending",
        }

        //insert as many parcels we want and return a message with new resource  in our temporary database
        execute(`INSERT INTO parcels
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,[uuid.v4(),origin,destination,uuid.v4(),new Date(),400,'Kamonyi',weight])
    return res.status(201).send(newParcel);
    },

   //fetch all parcels from our dummie databases
    getParcels(req, res){
        return res.status(200).send(parcels);
    },

    //fetch parcel by id condition
    getParcelById(req, res){
        const id=req.params.id;
        const oneParcel=parcels.find(parcel => parcel.id===id);
        return res.status(200).send(oneParcel);
    },


     //we are going to then to allow to cancel our created parcel 
     //and again return changed status

    cancelParcel(req, res){
        const id=req.params.id;
        const oneParcel=parcels.find(parcel => parcel.id===id);
        const index=parcels.indexOf(oneParcel);
        parcels[index].status="canceled";
        return res.status(201).send(parcels[index]);
    },
   
    //now we need to fetch parcels by userId

    getParcelsOfUser(req, res){
     const userId=req.params.userId
     const allParcels=parcels.filter(parcel=>parcel.userId===userId);
     return res.status(200).send(allParcels);
    }
}


export default parcelController;


