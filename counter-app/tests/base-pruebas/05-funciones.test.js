import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Funciones test', () => { 

    test('getUser debe retornar objeto', () => {

        // Arrange
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        // Act
        const user = getUser();

        // Assert
        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe retornar usuario activo', () => {

        // Arrange
        const nameUserActive = 'Yesid Sanabria';
        const testUser = {
            uid: 'ABC567',
            username: nameUserActive
        };

        // Act
        const user = getUsuarioActivo(nameUserActive);

        // Assert
        expect(user).toStrictEqual(testUser);
    });

});