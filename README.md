# SEND-IT

## Parcel Management System

sendit a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.  parcel Courier Management System parcel Shipment management system prototype for .  Purpose To enable a private delivery service to collect and deliver parcels. The system lets a manager/admin use a Management Dashboard to view, track, assign, and manage a list of all shipments.

---

**to enable users to :**

 1. Create a parcel delivery order 
 2. Get all parcel delivery orders
 3. Get a specific parcel delivery order 
 
 4.Cancel or delete a parcel delivery order 

---
--- 
**Screen-shot**
 ****fetch parcels by id****
 ![adding](https://user-images.githubusercontent.com/15107339/48858240-8a548280-edc3-11e8-83a4-ad391e5eb422.png)
 
 ****fetch all parcels ****

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


Clone or download the repository(parcel), then from the command line, run npm init and change to directory bin and runnode www(to start up the server). The system should open in a new browser window or tab automatically at http://localhost:7000 or you can even set your default port from 'www' server file.

---

**Technologies Used**

*Back end:*

* Node.js
* Express

*Front end:*

* html
* css

**Testing:**

* Mocha
* Chai

---

#### Endpoints for couriers.


**starting the server**

1. navigate into parcel,then in bin directory 
2. enter in bin directory (cd bin) 
3. and start the www server(node www to start the server)

## N.B thiss version is still under development some features may have not yet to be implemented.
