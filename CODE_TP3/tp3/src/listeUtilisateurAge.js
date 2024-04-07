const userData = {
    "user1": { age: 22, birthday: "1999-03-18" },
    "user2": { age: 30, birthday: "1992-05-10" },
};

const productData = [
    { id: 1, name: "product1", price: 500, discount: 50, rating: 4.8, category: "smartphone" },
    { id: 2, name: "product2", price: 700, discount: 0, rating: 4.5, category: "laptop" },
];

function getUserPreferences(userId) {
    if (!(userId in userData)) {
        throw new Error("Utilisateur non trouvé.");
    }

    const user = userData[userId];
    const age = user.age;

    if (age < 18) {
        throw new Error("Le site n'est pas ouvert aux mineurs.");
    } else if (age >= 18 && age <= 25) {
        const sortedProducts = productData.sort((a, b) => (b.price - b.discount) - (a.price - a.discount));
        return sortedProducts.slice(0, 10);
    } else if (age >= 26 && age <= 50) {
        return productData.filter(product => product.rating > 4.7);
    } else if (age > 50) {
        return productData.filter(product => product.category === "smartphone");
    }

    return [];
}

module.exports = getUserPreferences;
