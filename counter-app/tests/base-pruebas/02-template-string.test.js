import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Template string tests', () => {

    test('getSaludo debe retornar Hola Yesid', () => { 

        // Arrange
        const name = 'Yesid';

        // Act
        const message = getSaludo(name);

        // Assert
        expect(message).toBe(`Hola ${name}`);
    });
});