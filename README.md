# SEND-IT  [![Build Status](https://travis-ci.com/kevinever/send-it.svg?branch=master)](https://travis-ci.com/kevinever/send-it)

## Parcel Management System

*SEND-IT* is a courier service that helps its users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.  parcel Courier Management System parcel Shipment management system prototype for .  Purpose To enable a private delivery service to collect and deliver parcels. The system lets a manager/admin use a Management Dashboard to view, track, assign, and manage a list of all shipments.

---

**to enable users to :**

 1. Create a parcel order 
 2. Get all parcels orders
 3. Get a specific parcel by id
 4. Get a specific parcel by userid
 5. delete a parcel order 
 6. create a user
  
 1. Create a user order 
 2. Get all user orders
 3. Get a specific user by id
 4. Get a specific user by userid
 5. delete a parcel order
 
 4.Cancel or  

---
--- 
## Screen-shots
 
 ![adding](https://user-images.githubusercontent.com/15107339/48858240-8a548280-edc3-11e8-83a4-ad391e5eb422.png)
 
 
![byid](https://user-images.githubusercontent.com/15107339/48858709-ba505580-edc4-11e8-9dc7-b722f7837e6a.png)

![capture](https://user-images.githubusercontent.com/15107339/48858731-c6d4ae00-edc4-11e8-960c-128a8ae0472f.PNG)

---
---
**data structure  Source code**
{

    const parcels=[
    {
        id:"1",
        userId:"11",
        origin:"Kigali",
        destination:"Ruhengeri",
        weight:"20",
        createdDate:"1/1/2018",
        status:"pending",
    },{
        id:"2",
        userId:"12",
        origin:"Muhanga",
        destination:"Rwamagana",
        weight:"24",
        createdDate:"1/09/2018",
        status:"pending",
    },
    {
        id:"3",
        userId:"13",
        origin:"Gisenyi",
        destination:"Nyamata",
        weight:"30",
        createdDate:"1/07/2018",
        status:"pending",
    }
]
export default parcels

}

---
### HOW TO INSTALL AND RUN OR HOW TO 


Clone or download the repository(parcel), then from the command line, run npm init(if using npm) or yarn add to initialize the package json and use yarn add all dependecies and from the root repository *run npm start to start the server*(to start up the server). this app also can be found online via https://sendyourparcel.herokuapp.com/api/v1/parcels and the use the above params to use it .

---

**requirements**

*plugins:*

* Node.js
* Express
*babel
*babel-cli
*morgan
*uuid
*nodemon

*Future expectations:*

* Database
* and mant more

**Testing framework:**

* Mocha
* Chai

---

#### Endpoints for couriers.


**starting the server**

1. navigate into root directory,then run npm start 
2.and you are good to go server 3000 must be runnig


## N.B thiss version is still under development some features may not meet some expectations as it is still under development.
