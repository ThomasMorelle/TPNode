const getUserPreferences = require('../listeUtilisateurAge');

const userData = {
    "user1": { age: 22, birthday: "1999-03-18" },
    "user2": { age: 30, birthday: "1992-05-10" },
};

const productData = [
    { id: 1, name: "product1", price: 500, discount: 50, rating: 4.8, category: "smartphone" },
    { id: 2, name: "product2", price: 700, discount: 0, rating: 4.5, category: "laptop" },
    { id: 3, name: "product3", price: 800, discount: 100, rating: 4.9, category: "tablet" },
];

describe('getUserPreferences', () => {
    it('should return top 10 products sorted by discounted price for users aged between 18 and 25', () => {
        const userId = "user1";
        const expectedProducts = [
            { id: 3, name: "product3", price: 800, discount: 100, rating: 4.9, category: "tablet" },
            { id: 1, name: "product1", price: 500, discount: 50, rating: 4.8, category: "smartphone" },
            { id: 2, name: "product2", price: 700, discount: 0, rating: 4.5, category: "laptop" }
        ];

        expect(getUserPreferences(userId))==(expectedProducts);
    });

    it('should return products with rating higher than 4.7 for users aged between 26 and 50', () => {
        const userId = "user2";
        const expectedProducts = [
            { id: 3, name: "product3", price: 800, discount: 100, rating: 4.9, category: "tablet" }
        ];
    
        expect(getUserPreferences(userId))==(expectedProducts);
    });
    

    it('should return products in "smartphone" category for users older than 50', () => {
        const userId = "user2"; 
        const expectedProducts = [
            { id: 1, name: "product1", price: 500, discount: 50, rating: 4.8, category: "smartphone" }
        ];

        expect(getUserPreferences(userId))==(expectedProducts);
    });

    it('should throw an error for non-existing users', () => {
        const userId = "user3"; 

        expect(() => {
            getUserPreferences(userId);
        }).toThrow("Utilisateur non trouvé.");
    });
});
