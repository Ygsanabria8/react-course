import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Exportaciones test', () => {
    test('getHeroeById debe retornar un heroe', () => {

        // Arrange
        const hereoId = 3;

        // Act
        const heroe = getHeroeById(hereoId);

        // Assert
        expect(heroe).not.toBeUndefined();
        expect(heroe.id).toBe(hereoId);
    });

    test('getHeroeById debe retornar undefined si no existe id', () => {

        // Arrange
        const hereoId = 200;

        // Act
        const heroe = getHeroeById(hereoId);

        // Assert
        expect(heroe).toBeUndefined();
    });

    test('getHeroeByOwner debe retornar un listado de heroes de DC', () => {

        // Arrange
        const hereoOwner = 'DC';
        const heroesTest = heroes.filter((heroe) => heroe.owner === hereoOwner);

        // Act
        const heroesData = getHeroesByOwner(hereoOwner);

        // Assert
        expect(heroesData.length).toBe(heroesTest.length);
        expect(heroesData).toEqual(heroesTest);
    });

    test('getHeroeByOwner debe retornar un listado de heroes de Marvel', () => {

        // Arrange
        const hereoOwner = 'Marvel';
        const heroesTest = heroes.filter((heroe) => heroe.owner === hereoOwner);

        // Act
        const heroesData = getHeroesByOwner(hereoOwner);

        // Assert
        expect(heroesData.length).toBe(heroesTest.length);
    });

});