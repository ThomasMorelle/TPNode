const getUsersWhoBoughtProduct = require('../getUsersWhoBoughtProduct');

describe('getUsersWhoBoughtProduct', () => {
    it('devrait retourner la liste des utilisateurs ayant acheté le produit spécifié', () => {
        expect(getUsersWhoBoughtProduct("product1")).toEqual(["user1", "user2"]);
        expect(getUsersWhoBoughtProduct("product2")).toEqual(["user2", "user3"]);
        expect(getUsersWhoBoughtProduct("product3")).toEqual(["user1", "user3", "user4"]);
    });

    it('devrait retourner un message si le produit n\'est pas trouvé', () => {
        expect(getUsersWhoBoughtProduct("product4")).toEqual("Ce produit n'est présent dans aucun panier");
    });
});
