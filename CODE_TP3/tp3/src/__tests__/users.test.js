const { age } = require('../users');
const usersData = require("../users.json");

describe('Fonction age', () => {
  it('devrait retourner un tableau vide si aucun utilisateur n\'a plus de 50 ans', () => {
    const utilisateurs = [];
    expect(age(utilisateurs)).toEqual([]);
  });

  it('devrait retourner un tableau vide si la liste des utilisateurs est vide', () => {
    expect(age([])).toEqual([]);
  });

  it('devrait retourner les numéros de téléphone des utilisateurs de plus de 50 ans', () => {
    const numerosTelephonesAttendus = usersData.filter(user => user.age > 50).map(user => user.phoneNumber);
    expect(age(usersData)).toEqual(numerosTelephonesAttendus);
  });

  it('devrait ignorer les utilisateurs avec des âges invalides', () => {
    const utilisateursModifies = [
      { name: 'Alice', age: 60, phoneNumber: '123456789' },
      { name: 'Bob', age: 'invalide', phoneNumber: '987654321' }
    ];
    expect(age(utilisateursModifies)).toEqual(['123456789']);
  });

  it('devrait ignorer les utilisateurs sans la propriété "age"', () => {
    const utilisateursModifies = [
      { name: 'Alice', age: 60, phoneNumber: '123456789' },
      { name: 'Bob', phoneNumber: '987654321' },
      { name: 'Charlie', age: 55, phoneNumber: '456789123' }
    ];
    expect(age(utilisateursModifies)).toEqual(['123456789', '456789123']);
  });

  it('devrait lever une erreur si la liste des utilisateurs n\'est pas un tableau', () => {
    expect(() => age('pas un tableau')).toThrow('La liste des utilisateurs doit être un tableau');
  });
});
