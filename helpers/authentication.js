import jwt from 'jwt-simple';

const encodeToken = (user) => {
    let token = jwt.encode(user, "secretkey");
    return token;
}

const decodeToken = (token) => {
    let user = jwt.decode(token, "secretkey");
    return user;
}

const protectRoute = (req, res, next) => {
    let token = req.headers.token;
    let user = decodeToken(token);
    req.body.userid = user.id;
    if (user) {
        next()
    } else {
        res.send({ message: "Forbidden " });
    }
}

export default { protectRoute, encodeToken, decodeToken }