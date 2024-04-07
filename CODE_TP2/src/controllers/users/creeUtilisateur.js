const { crud } = require('./head');

async function creeUtilisateur(req, res, next) {
    try {
        const userData = req.body;

        const existingUser = await crud.findOne('users', { email: userData.email });
        if (existingUser) {
            return res.status(400).json({ error: 'Cet utilisateur existe déjà' });
        }

        const newUser = {
            id: generateUserId(), 
            nom: userData.nom,
            prenom: userData.prenom,
            email: userData.email,
        };

        const result = await crud.insertOne('users', newUser);

        res.json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    creeUtilisateur
};
