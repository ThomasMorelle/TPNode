const { crud } = require('./head');

async function creeWatchlist(req, res, next) {
    try {
        const watchlistData = req.body;

        const user = await crud.findOne('users', { id: watchlistData.utilisateurId });
        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        const existingWatchlist = await crud.findOne('watchlists', { utilisateurId: watchlistData.utilisateurId, nom: watchlistData.nom.toLowerCase() });
        if (existingWatchlist) {
            return res.status(400).json({ error: 'Une watchlist avec ce nom existe déjà pour cet utilisateur' });
        }

        const lastIdWatchlist = await crud.find('watchlists', {}, { id: -1 });
        const newWatchlistId = (lastIdWatchlist.length > 0) ? lastIdWatchlist[0].id + 1 : 1;
        const newWatchlist = {
            id: newWatchlistId,
            utilisateurId: watchlistData.utilisateurId,
            nom: watchlistData.nom.toLowerCase(),
            items: []
        };

        const result = await crud.insertOne('watchlists', newWatchlist);
        
        res.json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    creeWatchlist
};
