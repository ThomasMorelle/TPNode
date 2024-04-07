const userCarts = {
    "user1": [
        { idPanier: "toto", total: 100, totalDiscounted: 90 },
    ],
    "user2": [
        { idPanier: "tata", total: 150, totalDiscounted: 120 },
        { idPanier: "tutu", total: 200, totalDiscounted: 180 },
    ],
};

/**
 * Obtient le prix total et le prix total "discount" du (ou des) panier(s) d'un utilisateur.
 * Si l'utilisateur ne possède pas de panier, retourne son adresse e-mail.
 * Si le prix total dépasse 1000€, retourne également son adresse e-mail.
 * @param {string} userId - L'identifiant de l'utilisateur.
 * @returns {(Object[]|string)} - Un tableau contenant les prix total et total "discount" du (ou des) panier(s) de l'utilisateur, 
 * ou son adresse e-mail.
 */
function getTotalPrice(userId) {
    if (!(userId in userCarts)) {
        return "Adresse email: " + userId + "@example.com";
    }

    let totalPrice = 0;
    let totalDiscountedPrice = 0;

    for (let cart of userCarts[userId]) {
        totalPrice += cart.total;
        totalDiscountedPrice += cart.totalDiscounted;
    }

    if (totalPrice > 1000) {
        return [{ total: totalPrice, totalDiscounted: totalDiscountedPrice, mail: userId + "@example.com" }];
    } else {
        return [{ total: totalPrice, totalDiscounted: totalDiscountedPrice }];
    }
}

module.exports = getTotalPrice;