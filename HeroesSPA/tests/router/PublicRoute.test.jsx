import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';

describe('Test on PublicRoute', () => {
    test('should show children if not is authenticated', () => {

        // Arrange
        const contextValue = {
            logged: false,
        };

        // Act
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        // Assert
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });

    test('should navigate if is authenticated', () => {

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
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='marvel' element={
                            <h1>Marvel Page</h1>
                        } />
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // Assert
        expect(screen.getByText('Marvel Page')).toBeTruthy();
    });
});