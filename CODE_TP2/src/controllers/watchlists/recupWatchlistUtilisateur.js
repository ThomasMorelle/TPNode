const { crud } = require('./head');

async function recupWatchlistUtilisateur(req, res, next) {
    try {
        const utilisateurId = req.params.utilisateurId;

        const user = await crud.findOne('users', { id: utilisateurId });
        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        const watchlists = await crud.find('watchlists', { utilisateurId: utilisateurId });

        res.json(watchlists);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    recupWatchlistUtilisateur
};
