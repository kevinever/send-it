//we are gong to create our controllers to of our app to run on
//importing parcels from our data dummies arrays
//import parcels from '../data/parcelData';

import execute from '../db/database';
//id will be generated automatically as identifier of our parcels
import uuid from 'uuid';

//declaration of our controller that will help to CRUD as we want our created parcels

//creating a parcelcontroler object  that will be used in CRUD
const create = async (req, res) => {
        const{ origin, destination,price,presentlocation, weight }=req.body;
        let validInput =/^[\w ]+$/;
            
        if (!validInput.test(origin)){
            //let newinput = firstname;
            res.send("invalid origin");
            return ;
        }else if (!validInput.test(destination)){
            //let newinput = firstname;
            res.send("invalid destination");
            return ;
        }

        else if ( !validInput.test(price)){
            //let newemail = email;
            res.send("inavalid price");
        }else {

        // insert as many parcels we want and return a message with new resource  in our temporary database
       const { rows } = await execute(`INSERT INTO parcels
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,[uuid.v4(),origin,destination,uuid.v4(),new Date(),price,presentlocation,weight,'pending'])
        return res.status(201).send(rows[0]);
        }
    };

   //fetch all parcels from our dummie databases
    let getParcels = async (req, res) => {
        const {rows}= await execute(`SELECT * FROM parcels`);
        return res.status(200).send(rows);
    };

    //fetch parcel by id condition
    let getParcelById = async (req, res) => {
        const id = req.params.id;
        const{rows}=await execute(`SELECT * FROM parcels WHERE id = $1`,[id]) 
        return res.status(200).send(rows[0]);
    };


     //we are going to then to allow to cancel our created parcel 
     //and again return changed status

   let cancelParcel = async (req, res) => {
        const id=req.params.id;
        const {rows}= await execute(`UPDATE parcels SET status = $1 WHERE id = $2 RETURNING *`,['canceled',id])
        return res.status(201).send(rows);
    };
       
    
    let changeDestination = async (req, res) => {
        const id=req.params.id;
        let destination = req.body.destination;
        const {rows}= await execute(`UPDATE parcels SET destination = $1 WHERE id = $2 RETURNING *`,[destination,id])
        return res.status(201).send(rows);
    };


    let changeLocation = async (req, res) => {
        const id=req.params.id;
        let location = req.body.presentLocation;
        const {rows}= await execute(`UPDATE parcels SET presentLocation = $1 WHERE id = $2 RETURNING *`,[location,id])
        return res.status(201).send(rows);
    };




    //now we need to fetch parcels by userId

  let getParcelsOfUser = async (req, res) => {
     const userId=req.params.userId
     const {rows}= await execute(`SELECT * FROM parcels WHERE user_id = $1`,[userId]);
     return res.status(200).send(rows);
    }



export default{ create, getParcels, getParcelById, cancelParcel, changeDestination, changeLocation, getParcelsOfUser };


