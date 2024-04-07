const { crud } = require('./head');

async function modifStatutItems(req, res, next) {
    try {
        const { utilisateurId, watchlistId, itemId, nouveauStatut } = req.body;

        const user = await crud.findOne('users', { id: utilisateurId });
        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        const watchlist = await crud.findOne('watchlists', { id: watchlistId, utilisateurId });
        if (!watchlist) {
            return res.status(400).json({ error: 'Watchlist non trouvée' });
        }

        const itemIndex = watchlist.items.findIndex(item => item.id === itemId);
        if (itemIndex === -1) {
            return res.status(400).json({ error: 'Item non trouvé dans la watchlist' });
        }

        watchlist.items[itemIndex].statut = nouveauStatut;

        const result = await crud.updateOne('watchlists', { id: watchlistId }, { items: watchlist.items });

        res.json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    modifStatutItems
};
