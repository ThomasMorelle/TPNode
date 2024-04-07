/**
 * Recherche les utilisateurs ayant acheté un produit spécifique.
 * @param {string} productId - L'identifiant du produit à rechercher.
 * @returns {(string[]|string)} - Retourne la liste des identifiants des utilisateurs ayant acheté le produit.
 * Si aucun utilisateur n'a acheté le produit, retourne le message "Ce produit n'est présent dans aucun panier".
 */

const userPurchaseData = {
    "product1": ["user1", "user2"],
    "product2": ["user2", "user3"],
    "product3": ["user1", "user3", "user4"]
};

function getUsersWhoBoughtProduct(productId) {
    if (productId in userPurchaseData) {
        return userPurchaseData[productId];
    } else {
        return "Ce produit n'est présent dans aucun panier";
    }
}

module.exports = getUsersWhoBoughtProduct;
