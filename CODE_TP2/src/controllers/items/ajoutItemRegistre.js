const { crud } = require('./head');

async function ajoutItemRegistre(req, res, next) {
    try {
        const { registreId } = req.params;
        const itemData = req.body;

        const registre = await crud.findOne('registres', { id: registreId });
        if (!registre) {
            return res.status(404).json({ error: 'Registre non trouvé' });
        }

        const newItem = {
            id: generateItemId(), 
            nom: itemData.nom,
            description: itemData.description,
            prix: itemData.prix
        };
        registre.items.push(newItem);

        const updatedRegistre = await crud.updateOne('registres', { id: registreId }, { items: registre.items });

        res.json(updatedRegistre);
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = {
    ajoutItemRegistre
};
