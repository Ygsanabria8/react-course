import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/08-useContext/HomePage';
import { UserContext } from '../../src/08-useContext/context/UserContext';

describe('Test on HomePage', () => {

    test('should show HomePage without user', () => {

        // Act
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        // Assert
        expect(preTag.innerHTML).toBe('null');
    });

    test('should show HomePage with user', () => {

        // Arrange
        const user = {id: 1, name: 'Yesid'};
        
        // Act
        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        // Assert
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
    });
});