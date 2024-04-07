const getTotalPrice = require('../userCart');

describe('getTotalPrice', () => {
    it('devrait retourner le prix total et le prix total "discount" du panier d\'un utilisateur', () => {
        expect(getTotalPrice("user1")).toEqual([{ total: 100, totalDiscounted: 90 }]);
        expect(getTotalPrice("user2")).toEqual([{ total: 350, totalDiscounted: 300 }]);
    });

    it('devrait retourner l\'adresse e-mail de l\'utilisateur si aucun panier n\'est trouvé', () => {
        expect(getTotalPrice("user3")).toBe("Adresse email: user3@example.com");
    });

    it('devrait retourner l\'adresse e-mail de l\'utilisateur si le prix total dépasse 1000€', () => {
        expect(getTotalPrice("user4"))==([{ mail: "user4@example.com", total: 1200, totalDiscounted: 1100 }]);
    });
});
