//creation of user controllers 
import execute from '../db/database';
import uuid from 'uuid';


const create = async (req, res) => {

    const { origin, destination, price, presentlocation, weight } = req.body;
    let validInput = /^[\w ]+$/;
    if (!validInput.test(origin)) {
        res.send("invalid origin");
        return;
    }
    else if (!validInput.test(destination)) {
        res.send("invalid destination");
        return;
    }
    else if (!validInput.test(price)) {
        res.send("invalid price");
    }
    else {
        const { rows } = await execute(`INSERT INTO parcels
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [uuid.v4(), origin, destination, uuid.v4(), new Date(), price, presentlocation, weight, 'pending'])
        return res.status(201).send(rows[0]);
    }
};

let getParcels = async (req, res) => {
    const { rows } = await execute(`SELECT * FROM parcels`);
    return res.status(200).send(rows);
};
let getParcelById = async (req, res) => {
    const id = req.params.id;
    const { rows } = await execute(`SELECT * FROM parcels WHERE id = $1`, [id])
    return res.status(200).send(rows[0]);
};

let getUser = async (req, res) => {
    const id = req.params.id;
    const { rows } = await execute(`SELECT * FROM parcels WHERE user_id = $1`, [id])
    return res.status(200).send(rows[0]);
};

let cancelParcel = async (req, res) => {
    const id = req.params.id;
    let status = req.body.status;
    const { rows } = await execute(`UPDATE parcels SET status = $1 WHERE id = $2 RETURNING *`, [status, id])
    return res.status(201).send(rows);
};


let changeDestination = async (req, res) => {
    const id = req.params.id;
    let destination = req.body.destination;
    const { rows } = await execute(`UPDATE parcels SET destination = $1 WHERE id = $2 RETURNING *`, [destination, id])
    return res.status(201).send(rows);
};

let changeLocation = async (req, res) => {
    const id = req.params.id;
    let location = req.body.presentLocation;
    const { rows } = await execute(`UPDATE parcels SET presentLocation = $1 WHERE id = $2 RETURNING *`, [location, id])
    return res.status(201).send(rows);
};

let getParcelsOfUser = async (req, res) => {
    const userId = req.params.userId
    const { rows } = await execute(`SELECT * FROM parcels WHERE user_id = $1`, [userId]);
    return res.status(200).send(rows);
}
export default { create, getParcels, getParcelById, cancelParcel, changeDestination, changeLocation, getParcelsOfUser };


