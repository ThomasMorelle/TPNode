const { crud } = require('./head');

async function ajoutItemWatchlist(req, res, next) {
    try {
        const { watchlistId } = req.params;
        const itemData = req.body;

        const watchlist = await crud.findOne('watchlists', { id: watchlistId });
        if (!watchlist) {
            return res.status(404).json({ error: 'Watchlist non trouvée' });
        }

        const newItem = {
            id: generateItemId(), 
            nom: itemData.nom,
            description: itemData.description,
            prix: itemData.prix
        };
        watchlist.items.push(newItem);

        const updatedWatchlist = await crud.updateOne('watchlists', { id: watchlistId }, { items: watchlist.items });

        res.json(updatedWatchlist);
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = {
    ajoutItemWatchlist
};