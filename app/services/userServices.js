const User = require("../models/user");


/**
 * funcion asyncrona. crear/register un nuevo usuario
 * recogemos datos del usuario nuevo
 */
const addUser = async(userInput) => {
    const user = new User(userInput);
    await user.save();
    return user;
}

/**
 * verificar token
 * next => resultado con exito
 */
function verificarTokenPostman (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken;
        console.log(req.token);
        next();
    } else {        
        res.sendStatus(403);
    }
}

//exportacion en el mismo json
module.exports = { addUser, verificarTokenPostman };