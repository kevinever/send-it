
import uuid from 'uuid';
import protection from '../helpers/authentication';
import execute from '../db/database';
import passwordHash from 'password-hash';


const create = async (req, res) => {
    const { firstname, lastname, email, password, role } = req.body;
    let validInput = /^[\w ]+$/;
    let harshedPassword = passwordHash.generate(password);
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    let user = {
        firstname,
        lastname,
        email,
        password,
        role
    }
    if (!validInput.test(firstname)) {
        res.send("pleas enter first name");
        return;

    } else if (!validInput.test(lastname)) {
        res.send("pleas provide valid lastname");
        return;
    }
    else if (!validEmail.test(email)) {
        res.send("pleas enter valid email");

    } else {

        let token = protection.encodeToken(user);
        const { rows } = await execute(`INSERT INTO users
        VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [uuid.v4(), firstname, lastname, email, new Date(), harshedPassword, role])
        return res.status(201).send({ user: rows[0], token });
    }
};

let login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const { rows } = await execute(`SELECT firstname, lastname, email FROM users WHERE email = $1`, [email]);
        if (rows.length > 0) {
            return res.status(200).send(rows);
        }
        else {
            return res.send('Sorry your username or password is incorrect');
        }
        console.log('loged in successfully');
    }
    else {
        return res.status(400).send('Please enter your password and email');
    }
};


let logout = async (req, res) => {
    const { email, password } = req.body;
    const { rows } = await execute(`SELECT * FROM users WHERE email = $1`, [email]);
    return res.status(200).send(rows);
    console.log('loged out successfully');
};
let getusers = async (req, res) => {
    const { rows } = await execute(`SELECT * FROM users`);
    return res.status(200).send(rows);
};

export default { create, getusers, login };