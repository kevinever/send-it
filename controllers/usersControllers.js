
//we are gong to create our controllers to of our app to run from
//importing users from our data dummies arrays

//import users from '../data/userData';

//id will be generated automatically as identifier of our users
import uuid from 'uuid';


//declaration of our controller that will help to CRUD as we want our created users

//creating a usercontroler variable  that will be used in CRUD
const userController={
    create(req, res){
        const{ usename, email }=req.body;
        const newuser={
            id:(users.length+1).toString(),
            userId:uuid.v4(),
            usename,
        email,
        }
    

         //insert as many users we want and return a message with new resource  in our temporary database
    users.push(newuser);
    return res.status(201).send(newuser);
    },

//fetch all parcels from our dummie databases

    getusers(req,res){
        return res.status(200).send(users);
    },


    
    //fetch parcel by id condition

    getuserById(req, res){
        const id=req.params.id;
        const oneuser=users.find(user => user.id===id);
        return res.status(200).send(oneuser);
    },

//we are going to then to allow to cancel our created parcel 
     //and again return changed status
    canceluser(req, res){
        const id=req.params.id;
        const oneuser=users.find(user => user.id===id);
        const index=users.indexOf(oneuser);
        users[index].status="canceled";
        return res.status(201).send(users[index]);
    },


    //now we need to fetch parcels by userId
    getusersOfUser(req, res){
     const userId=req.params.userId
     const allusers=users.filter(user=>user.userId===userId);
     return res.status(200).send(allusers);
    }
}



export default userController;