/**
 * @function
 * @param {Array} users - Liste des utilisateurs avec leurs informations, chaque utilisateur étant représenté par un objet avec les propriétés suivantes : { name: string, age: number, phoneNumber: string }
 * @returns {Array} - Liste des numéros de téléphone des utilisateurs de plus de 50 ans
 */
const usersData = require("./users.json");

function age(users) {
  if (!Array.isArray(users)) {
    throw new Error("La liste des utilisateurs doit être un tableau");
  }

  return users
    .filter(user => user.age && user.age > 50) 
    .map(user => user.phoneNumber);
}

module.exports = {
  age,
};

module.exports = getUsersWhoBoughtProduct;
console.log(age(usersData));
