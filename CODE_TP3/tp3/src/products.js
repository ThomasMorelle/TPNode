const produits = [
    { categorie: "smartphone", libelle: "iPhone 9", stock: 15 },
    { categorie: "smartphone", libelle: "iPhone X", stock: 5 },
    { categorie: "laptops", libelle: "MacBook Pro9", stock: 60 }
];

function getInfoProduits(produits) {
    const categories = {};

    produits.forEach(produit => {
        if (!categories[produit.categorie]) {
            categories[produit.categorie] = [];
        }

        let dispo;
        if (produit.stock < 10) {
            dispo = "low";
        } else if (produit.stock <= 50) {
            dispo = "medium";
        } else {
            dispo = "high";
        }

        categories[produit.categorie].push({ libelle: produit.libelle, dispo: dispo });
    });

    return categories;
}

module.exports = getUsersWhoBoughtProduct;
module.exports = getInfoProduits;
const infos = getInfoProduits(produits);
console.log(JSON.stringify(infos, null, 2));
