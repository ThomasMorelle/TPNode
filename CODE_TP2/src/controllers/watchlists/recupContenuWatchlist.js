const { crud } = require('./head');

async function recupContenuWatchlist(req, res, next) {
    try {
        const { watchlistId } = req.params;

        const watchlist = await crud.findOne('watchlists', { id: watchlistId });
        if (!watchlist) {
            return res.status(404).json({ error: 'Watchlist non trouvée' });
        }

        res.json(watchlist.items);
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = {
    recupContenuWatchlist
};
