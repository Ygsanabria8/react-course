import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba asincronas', () => { 
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const heroeId = 1;

        getHeroeByIdAsync(heroeId)
            .then(heroe => {
                expect(heroe).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                );
                done();
            });
    });

    test('getHeroeByIdAsync debe tener error si no existe', (done) => {
        const heroeId = 100;

        getHeroeByIdAsync(heroeId)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
 });