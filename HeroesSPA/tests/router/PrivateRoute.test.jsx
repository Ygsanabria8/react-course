import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from '../../src/auth';

describe('Tests on PrivateRoute', () => {
    test('should show children if is authenticated', () => {

        // Arrange

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Yesid S.',
                id: '123',
            }
        };

        // Act
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // Assert
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
});