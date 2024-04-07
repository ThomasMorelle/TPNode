const { crud } = require('./head');

async function obtientUtilisateur(req, res, next) {
    try {
        const userList = await crud.find('users', {});
        res.json(userList);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    obtientUtilisateur
};
