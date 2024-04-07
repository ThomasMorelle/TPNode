const getInfoProduits = require('../products'); // Assurez-vous d'importer correctement la fonction getInfoProduits depuis votre fichier.

describe('getInfoProduits', () => {
    it('retourne les informations correctes pour chaque catégorie de produits', () => {
        const produits = [
            { categorie: "smartphone", libelle: "iPhone 9", stock: 15 },
            { categorie: "smartphone", libelle: "iPhone X", stock: 5 },
            { categorie: "laptops", libelle: "MacBook Pro9", stock: 60 }
        ];

        const result = getInfoProduits(produits);

        expect(result).toEqual({
            smartphone: [
                { libelle: "iPhone 9", dispo: "medium" },
                { libelle: "iPhone X", dispo: "low" }
            ],
            laptops: [
                { libelle: "MacBook Pro9", dispo: "high" }
            ]
        });
    });
});
