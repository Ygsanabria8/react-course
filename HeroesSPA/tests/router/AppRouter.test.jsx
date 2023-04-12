import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from '../../src/auth';


describe('Test on AppRouter', () => {
    test('should show login if is not autenticated', () => {

        // Arrange
        const contextValue = {
            logged: false
        };

        // Act
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Login')).toBeTruthy();
    });

    test('should show Marvel component if is autenticated', () => {

        // Arrange
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
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Marvel Comics')).toBeTruthy();
    });

    test('should show DC component if is autenticated', () => {

        // Arrange
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
                <MemoryRouter initialEntries={['/dc']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('DC Comics')).toBeTruthy();
    });
});