import users from '../data/userData';
import uuid from 'uuid';

const userController={
    create(req,res){
        const{ usename, email }=req.body;
        const newuser={
            id:(users.length+1).toString(),
            userId:uuid.v4(),
            usename,
        email,
        }
    users.push(newuser);
    return res.status(201).send(newuser);
    },
    getusers(req,res){
        return res.status(200).send(users);
    },
    getuserById(req,res){
        const id=req.params.id;
        const oneuser=users.find(user => user.id===id);
        return res.status(200).send(oneuser);
    },
    canceluser(req,res){
        const id=req.params.id;
        const oneuser=users.find(user => user.id===id);
        const index=users.indexOf(oneuser);
        users[index].status="canceled";
        return res.status(201).send(users[index]);
    },
    getusersOfUser(req,res){
     const userId=req.params.userId
     const allusers=users.filter(user=>user.userId===userId);
     return res.status(200).send(allusers);
    }
}
export default userController;